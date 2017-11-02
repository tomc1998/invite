<template>
  <div id="app" >
    <router-view/>
    <StubConsole :showing="consoleShowing" />
  </div>
</template>

<script>
export default {
  name: 'App',

  created() {
    // Add a key listener to show the console
    let toggleConsole = this.toggleConsole;
    document.addEventListener('keydown', function(event) {
      // 192 == backtick
      if (event.keyCode === 192) { toggleConsole(); }
    });
  },

  data() {
    return {
      consoleShowing: false,
    };
  },

  methods: {
    toggleConsole() {
      this.consoleShowing = !this.consoleShowing;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
