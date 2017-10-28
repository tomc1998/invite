<template>
  <ul class="Room-List">
    <div class="Profile-Header">
      <CircleAvatar width="128px" height="128px" 
        src="https://avatars0.githubusercontent.com/u/7818129?s=400&v=4"/>
      <div>Rupert Bergeron</div>
    </div>
    <li class="Room-List-Item" v-for="room in rooms">
      <router-link :to="'/home/' + room.id">
        <CircleAvatar width="32px" height="32px" 
          v-bind:src="room.pictureURL" />
        <span>{{room.name}}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'RoomList',
  computed: mapState(['rooms']),

  created() {
    this.$store.dispatch('fetchRooms');
  },

  methods: {
    onclick(e) {
      e.preventDefault();
      this.$router.push(e.target.getAttribute('href'));
    },
  }
}

</script>

<style lang="scss" scoped>

@import '../index.scss';

.Room-List {
  position: fixed;
  width: 256px;
  height: 100%;
  background-color: $col-background-red;
  overflow-y: auto;

  box-shadow: 2px 0 2px rgba(0, 0, 0, 0.5);

  .Profile-Header {
    $header-height: 256px;
    height: $header-height;
    padding-top: $header-height / 6;
    text-align: center;
    font-size: 24px;
    color: rgba(255, 255, 255, 0.7);
    background-color: $col-background-red-darker;
    box-shadow: 0 -2px 2px rgba(0, 0, 0, 0.4) inset;
    .Avatar-Container {
      margin-bottom: 20px;
      border: 4px solid #FFF;
    }
  }

  .Room-List-Item {
    display: block;
    height: 32px;
    margin: 0 15px;
    margin-top: 15px;

    a {
      border-radius: 999px;
      color: rgba(255, 255, 255, 0.7);
      display: block;
      width: 100%;
      height: 100%;
      padding-right: 0;
      background-color: $col-red;
      box-shadow: -8px 0px 8px rgba(255, 255, 255, 0.3) inset;

      transition: background-color 0.2s;

      .Avatar-Container {
        width: 32px;
        height: 32px;
      }
    }

    a:hover {
      background-color: $col-red-bright;
    }

    span {
      display: inline-block;
      position: relative;
      bottom: 35%;
      margin-left: 20px;
    }
  }
}

</style>
