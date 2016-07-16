<template>
  <div class="ControlWindowTile">
    <button class="ControlWindowTile__reveal" @click="reveal">{{ answerNumber }}</button>
    <input class="ControlWindowTile__answer" type="text" v-model="answer.answer">
    <input class="ControlWindowTile__points" type="number" v-model="answer.points">
  </div>
</template>
<style lang="scss">
  .ControlWindowTile {
    display: flex;
    margin: 1em .5em;

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
      answer: {
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
