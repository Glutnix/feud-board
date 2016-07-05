<template>
  <div class="GameBoard">
    <div class="column">
      <game-board-tile answer-number="1" answer="Taking Driving Lane" points="32"></game-board-tile>
      <game-board-tile answer-number="2" answer="Cut You Off" points="18"></game-board-tile>
      <game-board-tile answer-number="3" answer="Everything" points=""></game-board-tile>
      <game-board-tile answer-number="4" answer="Run Red Light" points="8"></game-board-tile>
    </div>
    <div class="column">
      <game-board-tile answer-number="5" answer="Pull Out In Front" points="6"></game-board-tile>
      <game-board-tile answer-number="6" answer="Ride Slowly" points="5"></game-board-tile>
      <game-board-tile answer-number="7" answer="Ring Bell" points="4"></game-board-tile>
      <game-board-tile answer-number="8" answer="Wear Lycra" points="3"></game-board-tile>
    </div>
  </div>
</template>

<script>
import GameBoardTile from './GameBoardTile';

export default {
  components: {
    'game-board-tile': GameBoardTile,
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
