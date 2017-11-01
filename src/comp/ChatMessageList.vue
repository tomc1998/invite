<template>
  <div class="Chat-Message-List-Container">
    <ul class="Chat-Message-List">
      <li v-for="m in messages">
        <ChatMessage :message='m' :isTemp='false' />
      </li>
      <li v-for="m in tempMessages">
        <ChatMessage :message='m' :isTemp='true' />
      </li>
    </ul>
  </div>
</template>

<script>

import Vue from 'vue';

export default {
  name: 'ChatMessageList',

  created() { this.routeUpdated() },

  computed: {
    messages() {
      let room = this.$store.state.rooms[this.roomID];
      if (room) {
        return room.messages;
      } else { return null; }
    },
    tempMessages() {
      let room = this.$store.state.rooms[this.roomID];
      if (room) {
        return room.tempMessages;
      } else { return null; }
    }
  },

  methods: {
    fetchRoomMessages() {
      let roomID = this.roomID;
      let store = this.$store;
      store.dispatch('fetchRoomMessages', roomID);
    },
    /** Method called when route is updated. Called from watch() and created(). */
    routeUpdated() {
      Vue.set(this, 'roomID', parseInt(this.$route.params.roomID));
      this.fetchRoomMessages();
    },
  },

  data() {
    return {
      roomID: parseInt(this.$route.params.roomID),
    }
  },

  watch: {
    '$route' (to, from) { this.routeUpdated() },
  },
}

</script>

<style lang="scss" scoped>

@import '../index.scss';

.Chat-Message-List-Container {
  background-color: change-color($col-primll, $lightness:90);
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  padding-bottom: $chat-input-height;
  .Chat-Message-List {
    height: 100%;
    overflow-y: auto;
  }
}

</style>



