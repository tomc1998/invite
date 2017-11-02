/**
* This is a console for triggering the longpolling stub
*/

<template>
  <div class="Stub-Console" :class="[showing ? '' : 'Hidden']">
    <md-input-container v-on:keyup.enter.native="submit()" class="Input">
      <md-input v-model="value"></md-input>
    </md-input-container>
  </div>
</template>

<script>

// import mapState from 'vuex';
import state from '@/longpoll/stub/state';

export default {
  name: 'StubConsole',

  // computed: mapState(['rooms']),

  data() {
    return {
      value: '',
    };
  },

  computed: {
    rooms() { return this.$store.state.rooms; }
  },

  methods: {
    submit() {
      if (this.value === 'confirm_all_messages') {
        // This command confirms all the temporary messages
        // Find all the rooms and temporary message indexes
        for (let rID of Object.keys(this.rooms)) {
          let r = this.rooms[rID];
          for (let m of r.tempMessages) {
            state.pushMessageSentConfirmation(r.id, m.id);
          }
        }
      }
    }
  },

  props: [
    'showing',
  ],
};

</script>

<style>

.Stub-Console {
  position: fixed;
  width: 100%;
  height: 32px;
  background-color: rgba(255, 255, 255, 0.5);
}

.Input {
  position: absolute;
  left: 64px;
  right: 64px;
  bottom: -24px;
  width: auto;
}

.Hidden {
  display: none;
}

</style>
