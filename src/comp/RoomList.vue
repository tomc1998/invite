<template>
  <ul>
    <li v-for="room in rooms">
      {{room.id}}: {{room.name}}
    </li>
  </ul>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'RoomList',
  computed: mapState(['rooms']),

  created() {
    this.$store.dispatch('fetchRooms')
      .then(function() {
        console.log(this.$store.state.rooms);
      });
  }
}

</script>

<style lang="scss" scoped>
</style>
