import Vuex from 'vuex'
import Vue from 'vue'
import Room from './room.js';
import User from './user.js';
import Message from './message.js';
import getRooms from './stub/get_rooms';
import getUsers from './stub/get_users';
import getRoomMessages from './stub/get_room_messages';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,

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
     *
     * Duplicate rooms ignored.
     */
    addRooms(state, rooms) {
      for (let r of rooms) {
        if (state.rooms.hasOwnProperty(r.id)) { continue; }
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
    },

    /** Add a list of messages to a given room. Simply appends items to
    * the list - it's recommended to use the chronoSortRoomMessages
    * mutation immediately after this one to make sure all the room
    * messages are in sorted order.
    *
    * Duplicate messages will be ignored (by ID)
    */
    addRoomMessages(state, [roomID, messages]) {
      let r = state.rooms[roomID]
      if (!r) {
        throw new Error('Room with ID ' + roomID + ' not found when calling' +
          ' addRoomMessages mutation.');
      }
      for (let m of messages) {
        let duplicated = false;
        for (let m2 of r.messages) {
          if (m.id === m2.id) {
            duplicated = true;
            break;
          }
        }
        if (!duplicated) {
          r.messages.push(new Message(m.id, m.body, m.picture_url, m.likes, m.timestamp, m.is_yours))
        }
      }
    },

    /**
     * Add a temporary message to a room. This is called when you type a
     * message into the chat input and hit send, but the server hasn't yet
     * responded with confirmation.
     *
     * # Params
     * * `roomID` - The ID of the room to add the temp message to.
     * * `message` - This is a string - NOT a message object.
     */
    addTempMessage(state, [roomID, message]) {
      let r = state.rooms[roomID]
      if (!r) {
        throw new Error('Room with ID ' + roomID + ' not found when calling' +
          ' addTempMessage mutation.');
      }
      r.tempMessages.push(message);
    },

    /** Chronologically sort all the messages of a room. */
    chronoSortRoomMessages(state, roomID) {
      let r = state.rooms[roomID]
      if (!r) {
        throw new Error('Room with ID ' + roomID + ' not found when calling' +
          ' chronoSortRoomMessages mutation.');
      }
      // Sort with regards to message timestamp
      r.messages.sort((a, b) => a.timestamp < b.timestamp ? -1 : 1)
    },

  },

  actions: {
    /**
     * Action to fetch rooms and populate room list. Will not fetch any messages.
     * If a room is already added, it will NOT be replaced. This means that
     * currently, and server side changes to room data will not be updated
     * until a full page reload. However, this is necessary as otherwise
     * changing rooms wipes data like cached and temporary messages.
     */
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
    },

    /** Fetch a list of messages in this room. This will get all the old
    * messages available, and should giv eyou enough (if available) to fill
    * the screen with messages. Any duplicate messages currently loaded into
    * the store object will not be duplicated, and the room messages will be
    * sorted according to timestamp.
    *
    * This will make an extra request if the room ID given is not available in
    * the store. After the request if the room still isn't available, this
    * action will throw an error.
    */
    fetchRoomMessages(context, roomID) {
      let tasks = [];
      tasks.push(getRoomMessages(roomID))
      if (!context.state.rooms.hasOwnProperty(roomID)) {
        tasks.push(context.dispatch('fetchRooms'));
      }
      Promise.all(tasks).then(data => {
        let messages = data[0];
        context.commit('addRoomMessages', [roomID, messages]);
        context.commit('chronoSortRoomMessages', roomID);
      });
    },
  },
});
