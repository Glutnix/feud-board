<template>
  <div class="ControlWindow">

    <div class="AnswerSetPicker">
      <select v-model="currentAnswerSet">
        <option :value="null">Load Answer Set…</option>
        <option v-for="answerSet in answerSets" :value="answerSet">{{ answerSet.name }}</option>
      </select>
    </div>

    <div class="AnswerList">
      <div class="column" v-if="currentAnswerSet">
        <control-window-tile v-for="n in 4" :answer-number="n + 1"
                             :answer="getAnswer(n)"></control-window-tile>
      </div>
      <div class="column" v-if="currentAnswerSet">
        <control-window-tile v-for="n in 4" :answer-number="n + 5"
                             :answer="getAnswer(n + 4)"></control-window-tile>
      </div>
    </div>
    <div class="">
      <button @click.stop.prevent="updateBoard" v-if="false">Reset and Send to Board</button>
      <button class="StrikeButton" @click.stop.prevent="wrong(1)">☒</button>
      <button class="StrikeButton" @click.stop.prevent="wrong(2)">☒</button>
      <button class="StrikeButton" @click.stop.prevent="wrong(3)">☒</button>
    </div>
  </div>
</template>

<style lang="scss">
  .ControlWindow {
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    &__body {
      font-size: 16px;
    }

    select {
      font-size: 16px;
      background-color: white;
    }
  }

  .AnswerList {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    vertical-align: center;
    width: 100%;
  }

  .AnswerSetPicker {
    select {
      width: 100%;
    }
  }

  .StrikeButton {
    font-size: 2em;
    color: red;
  }
</style>

<script>
  import ControlWindowTile from './ControlWindowTile';
  import AnswerSets from '../answerSets.json';
  export default {
    components: {
      ControlWindowTile,
    },

    data() {
      return {
        currentAnswerSet: null,
        answerSets: this.loadAnswerSets(),
      };
    },

    watch: {
      currentAnswerSet() {
        this.updateBoard();
      },
    },

    methods: {
      loadAnswerSets() {
        return JSON.parse(window.localStorage.getItem('answerSets')) || AnswerSets;
      },

      saveAnswerSets() {
        window.localStorage.setItem('answerSets', JSON.stringify(this.answerSets));
      },

      getAnswer(index) {
        if (! this.currentAnswerSet || ! this.currentAnswerSet.answers[index]) {
          return { answer: '', points: '' };
        }
        return this.currentAnswerSet.answers[index];
      },

      updateBoard() {
        this.$dispatch('sendMessage', ['newAnswerSet', this.currentAnswerSet]);
      },

      wrong(strikes) {
        this.$dispatch('sendMessage', ['wrongAnswer', strikes]);
      },
    },
  };
</script>
