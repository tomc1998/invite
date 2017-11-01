<template>
  <md-whiteframe md-elevation="2" class="Message"
    v-bind:class="[message.isOurs ? 'Message-Ours' : 'Message-Theirs']">
    {{ message.body }}
  </md-whiteframe>
</template>

<script>

export default {
  name: 'ChatMessage',

  created() {
    console.log('Hello');
  },

  props: [
    /** The message prop contains a Message object. */
    'message',
  ],
};

</script>

<style lang="scss" scoped>

@import '../index.scss';

/* Styling applied to all messages */
.Message {
  margin: 24px;
  padding: 16px 24px;
  color: $col-text-white;
  width: 80%;
}

/* Styling applied to only 'our' messages */
.Message-Ours {
  background-color: $col-comp;
  float: right;
}

/* Styling applied to only other people's messages */
.Message-Theirs {
  background-color: $col-prim;
  float: left;
}

</style>
