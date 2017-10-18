<template>
  <ul class="Room-List">
    <li class="Room-List-Item" v-for="room in rooms">
      <router-link :to="'/home/' + room.id">
        <CircleAvatar v-bind:src="room.pictureURL" />
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

  .Room-List-Item:nth-child(2n) a {
    background-color: $col-red-darker;
  }

  .Room-List-Item {
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
      background-color: $col-red;
      transition: background-color 0.2s;
    }

    a:hover {
      background-color: $col-red-bright;
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
