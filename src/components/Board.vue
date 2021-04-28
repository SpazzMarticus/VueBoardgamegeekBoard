<template>
  <div>
    <div v-if="!loaded" class="loading">
      Loading board for <i>{{ username }}</i
      >...
    </div>
    <div class="board" v-if="loaded">
      <div v-if="collection.length > 0">
        <div v-if="randomLeastPlayed" class="random">
          <Game class="game" :game="randomLeastPlayed">
            <template #button>
              <button @click="reroll">
                <img class="icon" src="@/assets/cycle.svg" />
              </button>
            </template>
          </Game>
        </div>

        <div class="center select">
          <select v-model="sortBy">
            <option
              v-for="(sortOption, key) in sortOptions"
              :key="key"
              :value="sortOption"
            >
              {{ sortOption.name }}
            </option>
          </select>
        </div>

        <div class="shelf">
          <Game
            class="game"
            v-for="game in collectionSorted"
            :key="game.id"
            :game="game"
          ></Game>
        </div>
      </div>
      <div v-else>
        <h1>Whoops!</h1>
        <p>You don't have any games in your collection.</p>
      </div>
    </div>
  </div>
</template>

<script>
import Request from "../modules/request.js";
import Game from "./Game.vue";

const sortOptions = [
  {
    name: "latest plays",
    sort(a, b) {
      if (a.lastPlayAgo === null && b.lastPlayAgo === null) {
        return 0;
      } else if (a.lastPlayAgo === null) {
        return 1;
      } else if (b.lastPlayAgo === null) {
        return -1;
      }
      return a.lastPlayAgo <= b.lastPlayAgo ? -1 : 1;
    },
  },
  {
    name: "most plays",
    sort(a, b) {
      if (a.playCount === null && b.playCount === null) {
        return 0;
      } else if (a.playCount === null) {
        return 1;
      } else if (b.playCount === null) {
        return -1;
      }
      return a.playCount >= b.playCount ? -1 : 1;
    },
  },
];

export default {
  name: "Board",
  components: {
    Game,
  },
  props: {
    username: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      loaded: false,
      collection: null,
      sortOptions,
      sortBy: sortOptions[0],
      randomLeastPlayed: null,
    };
  },
  mounted() {
    Request.fetch(this.username).then((collection) => {
      this.collection = collection;
      this.reroll();
      this.loaded = true;
    });
  },
  methods: {
    pickLeastPlayed() {
      let min = 0;
      this.collection.reduce((min, game) => {
        if (game.playCount < min) {
          min = game.playCount;
        }
      }, min);

      let leastPlayed = this.collection.filter((game) => {
        if (game.playCount === min) {
          return true;
        }
        return false;
      });

      this.randomLeastPlayed =
        leastPlayed[Math.floor(Math.random() * leastPlayed.length)];
    },
    reroll() {
      this.pickLeastPlayed();
    },
  },
  computed: {
    collectionSorted() {
      return this.collection.slice().sort(this.sortBy.sort);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.board {
  display: flex;
  flex-direction: column;
}

.select {
  padding-bottom: 12px;

  select {
    padding: 4px;
  }
}

.loading {
  padding: 2rem;
  font-size: 120%;
}

.random {
  margin-bottom: 1rem;
}

.shelf {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4px;
  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    gap: 0.6rem 1rem;
  }

  .game {
    margin-top: 0;
  }
}

.game {
  margin-top: 1rem;
  padding: 6px 8px;
  border-radius: 4px;
}
</style>
