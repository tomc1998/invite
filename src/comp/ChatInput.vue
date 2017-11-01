<template>
  <md-input-container v-on:keyup.enter.native="submit()" class="Chat-Input">
    <label>Send a message...</label>
    <md-input v-model="value"></md-input>
  </md-input-container>
</template>

<script>

export default {
  name: 'ChatInput',
  data() {
    return {
      value: '',
    }
  },
  methods: {
    submit() {
      this.$store.commit('addTempMessage', [this.$route.params.roomID, this.value]);
      this.value = '';
    }
  },
}

</script>

<style lang="scss" scoped>

@import '../index.scss';


.Chat-Input {
  position: absolute;
  bottom: 8px;
  left: 32px;
  right: 32px;
  width: auto;
  height: $chat-input-height - 8px;
  overflow: hidden;
}

</style>


