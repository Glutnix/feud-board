<template>
  <game-board></game-board>
</template>

<script>
  import GameBoard from './components/GameBoard';

  export default {
    components: {
      'game-board': GameBoard,
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
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: center;
    padding: 1em;
    overflow: hidden;
  }

  * {
    box-sizing: border-box;
  }

</style>
