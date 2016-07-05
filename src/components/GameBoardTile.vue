<template>
  <div class="GameBoardTile" @click.stop.prevent="reveal">
    <div v-if="hidden"class="GameBoardTile--hidden">
      {{ answerNumber }}
    </div>
    <div v-if="! hidden" transition="flip" class="GameBoardTile--revealed animated">
      <div class="GameBoardTile__answer">
        {{ answer }}
      </div>
      <div class="GameBoardTile__score">
        {{ points }}
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
      type: String,
      required: true,
    },
    points: {
      required: true,
    },
    hidden: {
      type: Boolean,
      default() {
        return true;
      },
    },
  },
  methods: {
    reveal() {
      this.hidden = ! this.hidden;
    },
  },
};
</script>

<style>

.GameBoardTile {
  color: white;
  border: .5rem solid #000;
  width: 100%;
}

.GameBoardTile--hidden {
  background-image: radial-gradient(farthest-corner at 50% 0, #0F00E3 0%, rgba(0,0,0,0.50) 100%), linear-gradient(90deg, #1A183A 0%, #0A0681 83%, #0300BA 91%, #1700EA 100%);
  text-align: center;
  font-size: 5rem;
  padding: 2.25rem;
}

.GameBoardTile--revealed {
  display: flex;
  background-image: linear-gradient(-133deg, #FAD961 0%, #F9DCAD 32%, #FEAD7E 100%);
  padding: .5rem;
}

.GameBoardTile__answer {
  flex: 7;
  background-image: linear-gradient(-90deg, #000000 0%, #0209BE 100%);
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
