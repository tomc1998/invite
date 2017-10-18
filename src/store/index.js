import Vuex from 'vuex'
import Vue from 'vue'
import Room from './room.js';
import User from './user.js';
import getRooms from './stub/get_rooms';
import getUsers from './stub/get_users';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    /** Rooms this user belongs to. A mapping of room IDs to room objects. */
    rooms: {
    },
    /** Mapping of user IDs to rooms */
    allUsers: {
    },
  },
  mutations: {
    /** Add some rooms. Rooms should follow the format returned by the
     * get_rooms request. Should only really be called from the `fetchRooms`
     * action.
     */
    addRooms(state, rooms) {
      for (let r of rooms) {
        Vue.set(state.rooms, r.id, new Room(r.id, r.name, r.users, r.picture_url));
      }
    },

    /** Add a list of users to allUsers. If a user ID is already registered,
    * the user will be updated in the map. */
    addUsers(state, users) {
      for (let u of users) {
        Vue.set(state.allUsers, u.id,
          new User(u.id, u.first_name, u.last_name, u.picture_url));
      }
    }
  },
  actions: {
    /** Action to fetch rooms and populate room list. Will not fetch any messages. */
    fetchRooms(context) {
      return getRooms().then(function(res) {
        context.commit('addRooms', res);
      });
    },

    /** Fetch the users in a given room. If a room with this ID is not found,
    * this will return a rejected promise with the error '0'. */
    fetchRoomUsers(context, roomID) {
      let room = context.state.rooms[roomID];
      if (!room) { return Promise.reject(new Error(0)) }
      let userIDs = context.state.rooms[roomID].users;
      return getUsers(userIDs).then(function(res) {
        context.commit('addUsers', res);
      });
    }
  },
});
