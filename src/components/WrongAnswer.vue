<template>
  <div class="WrongAnswer" v-if="strikes">
    <span v-for="n in strikes">☒</span>
    <audio v-el:sfx src="./static/sfx/wrong.mp3"></audio>
  </div>
</template>

<style lang="scss">
  .WrongAnswer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    text-shadow: 0px 0px 32px #d22;
    color: #d22;
    font-size: 8em;
  }
</style>

<script lang="babel">
  export default {

    data() {
      return {
        strikes: 0,
        timeout: null,
      };
    },

    events: {
      wrongAnswer(strikes) {
        this.strikes = strikes;
        this.playSound();
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.strikes = 0;
        }, 2000);
      },
    },

    methods: {
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
