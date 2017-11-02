<template>
  <ul class="Room-List">
    <div class="Profile-Header">
      <CircleAvatar width="128px" 
      height="128px" 
      src="https://avatars0.githubusercontent.com/u/7818129?s=400&v=4"/>
      <div>Rupert Bergeron</div>
    </div>
    <md-list-item class="Room-List-Item" v-for="room in rooms">
      <router-link :to="'/home/' + room.id">
        <md-avatar>
          <img :src="room.pictureURL"/>
        </md-avatar>
        <span>
          {{room.name}}
        </span>
      </router-link>
    </md-list-item>
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
  background-color: $col-primd;
  overflow-y: auto;

  box-shadow: 2px 0 2px rgba(0, 0, 0, 0.5);

  .Profile-Header {
    $header-height: 256px;
    height: $header-height;
    padding-top: $header-height / 6;
    text-align: center;
    font-size: 24px;
    color: $col-text-whited;
    background-color: $col-primdd;
    box-shadow: 0 -2px 2px rgba(0, 0, 0, 0.4) inset;
    .Avatar-Container {
      margin-bottom: 20px;
      border: 4px solid #FFF;
      img {
        position: relative !important;
        top: 2px !important;
        left: 2px !important;
      }
    }
  }

  .Room-List-Item {
    display: block;
    margin: 0;

    a {
      display: block;
      width: 100%;
      height: 100%;
      background-color: $col-primd;
      color: $col-text-white;
      padding: 10px;

      transition: background-color 0.2s;
    }

    a:hover {
      background-color: $col-prim
    }

    span {
      display: inline-block;
      position: relative;
      bottom: 35%;
      margin-left: 20px;
    }
  }

  .Room-List-Item:nth-child(2n) a:hover {
    background-color: $col-priml;
  }

}

</style>
