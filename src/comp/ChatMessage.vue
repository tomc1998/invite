<template>
  <div class="Message"
    v-bind:class="[message.isOurs ? Message-Ours : Message-Theirs]">
    {{ message.body }}
  </div>
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

/* Styling applied to all messages */
.Message {
}

/* Styling applied to only 'our' messages */
.Message-Ours {
}

/* Styling applied to only other people's messages */
.Message-Theirs {
}

</style>
