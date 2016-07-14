<template>
  <div class="ControlWindowTile">
    <button class="ControlWindowTile__reveal" @click="reveal">{{ answerNumber }}</button>
    <input class="ControlWindowTile__answer" type="text">
    <input class="ControlWindowTile__points" type="number">
  </div>
</template>
<style lang="scss">
  .ControlWindowTile {
    display: flex;

    &__reveal {
      flex: 2;
    }

    &__answer {
      flex: 14;
    }

    &__points {
      flex: 4;
    }
    input, button {
      width: 100%;
      font-size: 1em;
    }
  }
</style>
<script>
  export default {
    props: {
      answerNumber: {
        required: true,
      },
    },

    methods: {
      reveal() {
        this.$dispatch('sendMessage', ['revealTile', this.answerNumber]);
      },
    },
  };
</script>
