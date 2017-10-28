<template>
  <div class="Chat-Message-List-Container">
    <div class="Chat-Message-List">

    </div>
  </div>
</template>

<script>

export default {
  name: 'ChatMessageList',
}

</script>

<style lang="scss" scoped>

@import '../index.scss';

.Chat-Message-List-Container {
  background-color: $col-background-red-lighter;
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



