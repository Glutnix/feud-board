<template>
  <div class="GameBoardTile">
    <div v-if="hidden" class="GameBoardTile__hidden">
      <span v-if="answer.answer">{{ answerNumber }}</span>
      <span v-if="!answer.answer">&nbsp;</span>
    </div>
    <div v-if="! hidden" transition="flip" class="GameBoardTile__revealed animated">
      <div class="GameBoardTile__answer">
        {{ answer.answer }}
      </div>
      <div class="GameBoardTile__score">
        {{ answer.points }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      answerNumber: {
        required: true,
      },
      answer: {
        type: Object,
        required: true,
      },
      hidden: {
        type: Boolean,
        required: true,
      },
    },
  };
</script>

<style>

  .GameBoardTile {
    color: white;
    border: .5rem solid #000;
    width: 100%;
    height: 3em;
  }

  .GameBoardTile__hidden {
    text-align: center;
    font-size: 5rem;
    padding: 2.25rem;
    height: 100%;
    background-image: radial-gradient(farthest-corner at 50% 0, #0F00E3 0%, rgba(0, 0, 0, 0.50) 100%),
    linear-gradient(90deg, #1A183A 0%, #0A0681 83%, #0300BA 91%, #1700EA 100%);
  }

  .GameBoardTile__revealed {
    display: flex;
    background-image: linear-gradient(227deg, #FAD961 0%, #F9DCAD 32%, #FEAD7E 100%);
    padding: .5rem;
    height: 100%;
  }

  .GameBoardTile__answer {
    flex: 7;
    background-image: linear-gradient(270deg, #000000 0%, #0209BE 100%);
    padding: 2.5rem;
    text-transform: uppercase;
  }

  .GameBoardTile__score {
    flex: 1;
    text-align: center;
    background: #0051FE;
    padding: 2.5rem;
  }


</style>
