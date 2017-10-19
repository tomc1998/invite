<template>
  <div class="Avatar-Container">
    <img :src="src" />
  </div>
</template>

<script>

export default {
  name: 'CircleAvatar',
  props: ['src'],
}

</script>

<style lang="scss" scoped>
.Avatar-Container {

  display: inline-block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);

  img {
    display: inline;
    width: inherit;
  }
}
</style>
