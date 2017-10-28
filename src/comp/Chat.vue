<template>
  <div class="Chat">
    <ChatMessageList/>
    <ChatInput/>
  </div>
</template>

<script>

export default {
  name: 'Chat',
}

</script>

<style lang="scss" scoped>

.Chat {
  position: fixed;
  left: 256px;
  right: 256px;
  height: 100%;
}

</style>

