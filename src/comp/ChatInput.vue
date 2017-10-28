<template>
  <div class="Chat-Input">
    <input type="text"/>
  </div>
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
  bottom: 4px;
  left: 4px;
  right: 4px;
  height: $chat-input-height - 8px;
  box-shadow: 0 0px 3px rgba(0, 0, 0, 0.5);
  border-radius: 50px;
  overflow: hidden;

  input {
    width: 100%;
    height: 100%;
    border: none;
    padding: 12px 24px;
    font-size: 18px;
    color: $col-text-black;
    background-color: $col-text-white;
  }
}

</style>


