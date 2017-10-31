<template>
  <md-input-container class="Chat-Input">
    <label>Send a message...</label>
    <md-textarea></md-textarea>
  </md-input-container>
</template>

<script>

export default {
  name: 'ChatInput',
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


