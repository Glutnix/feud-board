<template>
  <div class="App">
    <game-board></game-board>
    <wrong-answer></wrong-answer>
  </div>
</template>

<script>
  import GameBoard from './components/GameBoard';
  import WrongAnswer from './components/WrongAnswer';

  export default {
    components: {
      GameBoard,
      WrongAnswer,
    },
  };
</script>

<style>
  @import url(https://fonts.googleapis.com/css?family=Oswald:700);
  @import url(../node_modules/animate.css/animate.css);

  html {
    height: 100%;
    background-image: linear-gradient(-180deg, #030B42 0%, #003DEF 100%);
  }

  body {
    height: 100%;
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    font-size: 4em;
    padding: 1em;
    overflow: hidden;
  }

  .App {
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: center;
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }

  [v-cloak] {
    display: none;
  }

</style>
