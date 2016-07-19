<template>
  <div class="ControlWindow">

    <div class="AnswerSetPicker">
      <select v-model="currentAnswerSet">
        <option :value="null">Load Answer Set…</option>
        <option v-for="answerSet in answerSets" :value="answerSet">{{ answerSet.name }}</option>
      </select>
      <button @click.stop.prevent="updateBoard" v-if="false">Reset and Send to Board</button>
    </div>

    <div class="AnswerList" @blur.stop="updateBoard" @change.stop="updateBoard">
      <div class="column" v-if="currentAnswerSet">
        <control-window-tile v-for="n in 4" :answer-number="n + 1"
                             :answer.sync="this.currentAnswerSet.answers[n]"></control-window-tile>
      </div>
      <div class="column" v-if="currentAnswerSet">
        <control-window-tile v-for="n in 4" :answer-number="n + 5"
                             :answer.sync="this.currentAnswerSet.answers[n + 4]"></control-window-tile>
      </div>
    </div>
    <div class="EffectsButtons">
      <button class="StrikeButton" @click.stop.prevent="wrong(1)" title="Strike 1">☒</button>
      <button class="StrikeButton" @click.stop.prevent="wrong(2)" title="Strike 2">☒</button>
      <button class="StrikeButton" @click.stop.prevent="wrong(3)" title="Strike 3">☒</button>

      <div class="RightButtons">
        <button class="SaveAnswerSet" @click.stop.prevent="saveAnswerSet" title="Save as new…">💾
        </button>

        <button @click.prevent.stop="toggleMuted" class="MuteToggle">
          <span v-if="muted" title="Toggle Sound (currently muted)">🔕</span>
          <span v-else title="Toggle Sound (currently unmuted)">🔔</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  button {
    border-radius: 6px;
    background-color: #eee;
  }

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

  .EffectsButtons {
    width: 100%;
    margin-top: .5em;
    font-size: 2em;
    button {
      font-size: 1em;
      height: 1.7em;
    }
  }

  .StrikeButton {
    color: red;
  }

  .RightButtons {
    float: right;
  }

  .MuteToggle {
    margin-left: .5em;
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
        muted: false,

        watchTriggered: false,
      };
    },

    watch: {
      currentAnswerSet(val) {
        if (this.watchTriggered) return;

        this.watchTriggered = true;
        this.currentAnswerSet = JSON.parse(JSON.stringify(val));
        this.updateBoard();
        this.$nextTick(() => {
          this.watchTriggered = false;
        });
      },
    },

    ready() {
      this.$dispatch('sendMessage', ['setMuted', false]);
      if (! this.currentAnswerSet) {
        this.currentAnswerSet = this.answerSets[0];
      }
      this.saveAnswerSets();
    },


    methods: {
      loadAnswerSets() {
        const localAnswerSets = JSON.parse(window.localStorage.getItem('answerSets'));
        return localAnswerSets || AnswerSets;
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

      saveAnswerSet() {
        const name = prompt(
          'Survey Question for answer set?'
        ); // eslint-disable-line no-alert
        if (! name) return;

        this.currentAnswerSet.name = name;
        this.answerSets.push(this.currentAnswerSet);
        this.saveAnswerSets();
      },

      updateBoard() {
        this.$dispatch('sendMessage', ['newAnswerSet', this.currentAnswerSet]);
      },

      wrong(strikes) {
        this.$dispatch('sendMessage', ['wrongAnswer', strikes]);
      },

      toggleMuted() {
        this.muted = ! this.muted;
        this.$dispatch('sendMessage', ['setMuted', this.muted]);
      },
    },
  };
</script>
