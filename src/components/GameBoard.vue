<template>
  <div class="GameBoard" :class="{ 'GameBoard--setting-up': ! answers }">
    <div class="column" v-if="answerSet">
      <game-board-tile v-for="n in 4"
                       :answer-number="n + 1"
                       :answer="answerSet.answers[n]"
                       :hidden="answerIsHiddenSet[n]"
      ></game-board-tile>
    </div>
    <div class="column" v-if="answerSet">
      <game-board-tile v-for="n in 4"
                       :answer-number="n + 5"
                       :answer="answerSet.answers[n + 4]"
                       :hidden="answerIsHiddenSet[n + 4]"
      ></game-board-tile>
    </div>
    <div v-else class="SettingUp">
      <p>Setting up...</p>
      <p class="PopupBlocked" v-cloak v-if="popupBlocked">(control window popup was blocked, unblock
        and refresh)</p>
    </div>
    <audio v-el:sfx src="./static/sfx/correct.mp3"></audio>
  </div>
</template>

<script lang="babel">
  import GameBoardTile from './GameBoardTile';

  export default {
    components: {
      'game-board-tile': GameBoardTile,
    },

    data() {
      return {
        answerSet: null,
        answerIsHiddenSet: null,

        popupBlocked: false,
      };
    },

    computed: {
      answers() {
        if (! this.answerSet) {
          return null;
        }
        return this.answerSet.answers;
      },
    },

    events: {
      revealTile(answerNumber) {
        console.log(`revealTile ${answerNumber}`); // eslint-disable-line no-console
        this.answerIsHiddenSet.$set([answerNumber - 1], false);
        this.playSound();
      },
      newAnswerSet(answerSet) {
        this.answerSet = answerSet;
        this.answerIsHiddenSet = [true, true, true, true, true, true, true, true];
      },
      popupBlocked() {
        setTimeout(() => {
          this.popupBlocked = true;
        }, 1000);
      },
    },

    methods: {
      getAnswer(index) {
        if (! this.answerSet || ! this.answerSet.answers[index]) {
          return { answer: '', points: '' };
        }
        return this.answerSet.answers[index];
      },

      playSound() {
        if (window.muted) return;
        this.$nextTick(() => {
          this.$els.sfx.currentTime = 0;
          this.$els.sfx.play();
        });
      },
    },
  };
</script>

<style lang="scss">

  .GameBoard {
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: center;
    width: 100%;
    border: .5rem solid #000;

    &--setting-up {
      color: white;
      border: none;
    }
  }

  .column {
    flex: 1;
  }

  .SettingUp {
    text-align: center;
  }

  .PopupBlocked {
    font-size: .5em;
  }

</style>
