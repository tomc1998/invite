import Vuex from 'vuex'
import Vue from 'vue'
import Room from './room.js';
import getRooms from './stub/get_rooms';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    /** Rooms this user belongs to. A mapping of room IDs to room objects. */
    rooms: {
    },
  },
  mutations: {
    /** Add some rooms. Rooms should follow the format returned by the
     * get_rooms request. Should only really be called from the `fetchRooms`
     * action.
     */
    addRooms(state, rooms) {
      for (let r of rooms) {
        Vue.set(state.rooms, r.id, new Room(r.id, r.name, r.users));
      }
    }
  },
  actions: {
    /** Action to fetch rooms and populate room list. Will not fetch any messages. */
    fetchRooms(context) {
      getRooms().then(function(res) {
        context.commit('addRooms', res);
      });
    }
  },
});
