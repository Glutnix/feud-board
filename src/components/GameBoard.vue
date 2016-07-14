<template>
  <div class="GameBoard">
    <div class="column">
      <game-board-tile v-for="n in 4"
                       :answer-number="n + 1"
                       :answer="answers[n].answer"
                       :points="answers[n].points"
                       :hidden="answers[n].hidden"
      ></game-board-tile>
    </div>
    <div class="column">
      <game-board-tile v-for="n in 4"
                       :answer-number="n + 5"
                       :answer="answers[n+4].answer"
                       :points="answers[n+4].points"
                       :hidden="answers[n+4].hidden"
      ></game-board-tile>
    </div>
  </div>
</template>

<script>
  import GameBoardTile from './GameBoardTile';

  export default {
    components: {
      'game-board-tile': GameBoardTile,
    },

    data() {
      return {
        answers: [
          { answer: 'Taking Driving Lane', points: 32, hidden: true },
          { answer: 'Cut You Off', points: 18, hidden: true },
          { answer: 'Everything', points: '', hidden: true },
          { answer: 'Run Red Light', points: 8, hidden: true },
          { answer: 'Pull Out In Front', points: 6, hidden: true },
          { answer: 'Ride Slowly', points: 5, hidden: true },
          { answer: 'Ring Bell', points: 4, hidden: true },
          { answer: 'Wear Lycra', points: 3, hidden: true },
        ],
      };
    },

    events: {
      revealTile(answerNumber) {
        console.log(`revealing ${answerNumber}`); // eslint-disable-line no-console
        this.answers[answerNumber - 1].hidden = false;
      },
    },
  };
</script>

<style>

  .GameBoard {
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: center;
    width: 100%;
    border: .5rem solid #000;
  }

  .column {
    flex: 1;
  }

</style>
