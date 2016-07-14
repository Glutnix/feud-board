<template>
  <div class="ControlWindow">
    <button @click="reveal">•</button>
  </div>
</template>

<style>
  .ControlWindow {
    display: flex;
  }
</style>

<script>
  export default {
    methods: {
      reveal() {
        this.$dispatch('sendMessage', ['revealTile', 1]);
      },
    },
  };
</script>
