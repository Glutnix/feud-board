<template>
  <div class="ControlWindow">
    <div class="AnswerList">
      <div class="column">
        <control-window-tile answer-number="1"></control-window-tile>
        <control-window-tile answer-number="2"></control-window-tile>
        <control-window-tile answer-number="3"></control-window-tile>
        <control-window-tile answer-number="4"></control-window-tile>
      </div>
      <div class="column">
        <control-window-tile answer-number="5"></control-window-tile>
        <control-window-tile answer-number="6"></control-window-tile>
        <control-window-tile answer-number="7"></control-window-tile>
        <control-window-tile answer-number="8"></control-window-tile>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .ControlWindow__body {
    font-size: 16px;
  }

  .ControlWindow {
    display: flex;
    align-items: flex-start;
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
</style>

<script>
  import ControlWindowTile from './ControlWindowTile';
  export default {
    components: {
      ControlWindowTile,
    },
  };
</script>
