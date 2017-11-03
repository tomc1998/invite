<template>
  <md-input-container v-on:keyup.enter.native="submit()" class="Chat-Input">
    <label>Send a message...</label>
    <md-input v-model="value"></md-input>
  </md-input-container>
</template>

<script>

import TempMessage from '@/store/temp_message';

export default {
  name: 'ChatInput',
  data() {
    return {
      value: '',
    }
  },
  methods: {
    submit() {
      // Generate a temporary message with a random ID (assume unique among
      // other temp messages in this room)
      let tempMessage = new TempMessage(
        Math.floor(Math.random() * 1000000000),
        this.value,
        null);
      this.$store.commit('addTempMessage', [this.$route.params.roomID, tempMessage]);
      this.value = '';
    }
  },
}

</script>

<style lang="scss" scoped>

@import '../index.scss';


.Chat-Input {
  position: absolute;
  bottom: -12px;
  left: 32px;
  right: 32px;
  width: auto;
  height: $chat-input-height - 16px;
  overflow: hidden;
}

</style>


