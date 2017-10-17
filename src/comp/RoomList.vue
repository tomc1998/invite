<template>
  <ul class="Room-List">
    <li class="Room-List-Item" v-for="room in rooms">
      <a :href="'/home/' + room.id">
        <CircleAvatar v-bind:src="room.pictureURL" />
        <span>{{room.name}}</span>
      </a>
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

  .Room-List-Item:nth-child(2n) a {
    background-color: $col-red-darker;
  }

  .Room-List-Item {
    display: block;
    height: 64px;

    a {
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
      bottom: 40%;
      margin-left: 20px;
    }
  }
}

</style>
