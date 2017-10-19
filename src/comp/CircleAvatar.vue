<template>
  <div class='Avatar-Container' :style='style'>
    <img :src='src'/>
  </div>
</template>

<script>

export default {
  name: 'CircleAvatar',
  props: ['src', 'width', 'height'],
  computed: {
    style() {
      let style = '';
      if (this.width || this.width === 0) {
        style += 'width: ' + this.width + ';\n';
      }
      if (this.height || this.height === 0) {
        style += 'height: ' + this.height + ';\n';
      }
      console.log(this.width + ' ' + this.height);
      console.log(style);
      return style;
    },
  },
}

</script>

<style lang='scss' scoped>
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
