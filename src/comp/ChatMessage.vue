<template>
  <transition name="Message">
    <md-whiteframe md-elevation="2" class="Message" v-if="!isTemp"
      v-bind:class="[message.isOurs ? 'Message-Ours' : 'Message-Theirs']">
      {{ message.body }}
    </md-whiteframe>
    <md-whiteframe md-elevation="2" class="Message Message-Temp Message-Ours" v-if="isTemp">
      {{ message.body }}
    </md-whiteframe>
  </transition>
</template>

<script>

export default {
  name: 'ChatMessage',

  props: [
    /**
     * The message prop. Contains a Message object, unless isTemp is true - in
     * which case this is just a string, and it is assumed that this message is
     * ours.
     */
    'message',
    /**
     * A boolean which is true if this is a 'temporary' message - sent by us,
     * but not yet confirmed by the server.
     */
    'isTemp',
  ]
};

</script>

<style lang="scss" scoped>

@import '../index.scss';

/* Styling applied to all messages */
.Message {
  position: relative;
  bottom: 0;
  margin: 10px 24px;
  padding: 16px 24px;
  color: $col-text-white;
  width: 80%;
  transition: opacity .5s, bottom .5s;
}

/* Styling applied to only 'our' messages */
.Message-Ours {
  background-color: $col-comp;
  float: right;
}

.Message-Temp {
  background-color: $col-compll;
}

/* Styling applied to only other people's messages */
.Message-Theirs {
  background-color: $col-prim;
  float: left;
}

.Message-enter-active, .Message-leave {
  opacity: 1;
  bottom: 0;
}

.Message-enter, .Message-leave-to {
  opacity: 0;
  bottom: 8px;
}

</style>
