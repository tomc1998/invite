<template>
  <ul class="User-List">
    <div class="User-List-Header"> Users </div>
    <li class="User-List-Item" v-for="user in users">
      <a v-on:click="user-clicked" :id="user.id">
        <CircleAvatar v-bind:src="user.pictureURL" />
        <span>{{user.firstName + " " + user.lastName}}</span>
      </a>
    </li>
  </ul>
</template>

<script>

import { mapState } from 'vuex';
import Vue from 'vue';

export default {
  name: 'UserList',
  computed: {
    users() {
      let room = this.$store.state.rooms[this.roomID]
      if (room && room.users) {
        let allUsers = this.allUsers;
        return room.users
          .map(function(id) { return allUsers[id] })
          .filter(u => u);
      } else { return null; }
    },
    ...mapState(['allUsers'])
  },

  data() {
    return {
      roomID: this.$route.params.roomID,
    }
  },

  created() {
    this.fetchUsers();
  },

  methods: {
    onclick(e) {
      e.preventDefault();
      this.$router.push(e.target.getAttribute('href'));
    },
    fetchUsers() {
      // Check if we need to fetch the room
      let fetchRoomsTask;
      if (this.$store.state.rooms.hasOwnProperty(this.roomID)) {
        fetchRoomsTask = this.$store.dispatch('fetchRooms');
      } else {
        fetchRoomsTask = Promise.resolve();
      }
      let roomID = this.roomID;
      let store = this.$store;
      fetchRoomsTask.then(function() {
        store.dispatch('fetchRoomUsers', roomID)
          .catch(function(err) {
            // Err == 0 if room doesn't exist (i.e. we're on home/-1 or
            // something) so don't bother clog console with error log
            if (err.message !== '0') {
              console.log(err);
            }
          });
      });
    },
  },

  watch: {
    '$route' (to, from) {
      console.log(this.$route.params.roomID);
      Vue.set(this, 'roomID', this.$route.params.roomID);
      this.fetchUsers();
    },
  },
}

</script>

<style lang="scss" scoped>

@import '../index.scss';

.User-List {
  position: fixed;
  right: 0;
  width: 256px;
  height: 100%;
  background-color: $col-background-red;
  overflow-y: auto;

  box-shadow: -2px 0 2px rgba(0, 0, 0, 0.5);

  .User-List-Header {
    $header-height: 128px;
    height: $header-height;
    padding-top: $header-height / 3;
    text-align: center;
    font-size: 24px;
    color: rgba(255, 255, 255, 0.7);
    background-color: $col-background-red-darker;
    box-shadow: 0 -2px 2px rgba(0, 0, 0, 0.4) inset;
  }

  .User-List-Item a:hover {
    background-color: $col-red-bright;
  }

  .User-List-Item:nth-child(2n) a:hover {
    background-color: $col-red;
  }

  .User-List-Item {
    display: block;
    height: 68px;

    a {
      font-size: 18px;
      color: rgba(255, 255, 255, 0.7);
      display: block;
      width: 100%;
      height: 100%;
      padding: 10px;
      padding-right: 0;
      background-color: $col-background-red;
      transition: background-color 0.2s;
    }

    span {
      display: inline-block;
      position: relative;
      bottom: 36%;
      margin-left: 20px;
    }
  }
}

</style>
