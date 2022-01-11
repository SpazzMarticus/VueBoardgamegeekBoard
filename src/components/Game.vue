<template>
  <div class="game" :class="classNames">
    <div class="thumbnail-container">
      <img :src="game.thumbnail" class="thumbnail" />
    </div>
    <div class="content-container">
      <div class="ago" v-if="game.playCount">
        <span v-if="game.lastPlayAgo === 0"> played today </span
        ><span v-else>
          <strong>{{ game.lastPlayAgo }}</strong> days ago
        </span>
      </div>
      <div class="flex">
        <a
          class="name"
          :class="{ long: nameIsLong }"
          :href="game.uri"
          target="_blank"
          rel="nofollow noopener"
          >{{ nameMain }}
          <span v-if="nameSecondary" class="secondary"
            ><br />{{ nameSecondary }}</span
          >
        </a>
        <slot name="button"></slot>
      </div>
      <div v-if="game.playCount" class="plays">
        <div>
          <strong>{{ gameCountThisYear }}</strong
          ><br />
          this year
        </div>
        <div>
          <strong>{{ gameCountLastYear }}</strong
          ><br />
          last year
        </div>
        <div>
          <strong>{{ game.playCount }}</strong
          ><br />
          total
        </div>
      </div>
      <div v-else class="plays-none">
        <small> no plays logged </small>
      </div>
    </div>
  </div>
</template>
<script>
const thisYear = new Date().getFullYear();

const split = (string, index) => {
  const parts = string.split(/:/);
  return parts[index] ?? null;
};

export default {
  name: "Game",
  props: {
    game: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {};
  },
  computed: {
    nameMain() {
      return split(this.game.name, 0);
    },
    nameSecondary() {
      return split(this.game.name, 1);
    },
    nameIsLong() {
      return this.nameMain.length > 25;
    },
    classNames() {
      let classNames = [];
      if (this.game.lastPlayAgo === null) {
        classNames.push("last-played-never");
      } else if (this.game.lastPlayAgo <= 7) {
        classNames.push("last-played-week");
      } else if (this.game.lastPlayAgo <= 30) {
        classNames.push("last-played-month");
      } else if (this.game.lastPlayAgo <= 356) {
        classNames.push("last-played-year");
      }
      return classNames;
    },
    gameCountThisYear() {
      return this.game.playsByYear[thisYear] ?? "-";
    },
    gameCountLastYear() {
      return this.game.playsByYear[thisYear - 1] ?? "-";
    },
  },
};
</script>
<style lang="scss" scoped>
$grey: #525252;

.game {
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;

  background-color: #efefef;

  .name {
    display: block;
    font-size: 1.3rem;
    margin-top: 3px;
    margin-bottom: 6px;
    text-decoration: none;
    white-space: pre-line;
    &:hover {
      text-decoration: underline;
    }
    &.long {
      font-size: 1.15rem;
    }
    .secondary {
      font-size: 80%;
    }
  }

  .plays {
    padding-top: 0.2rem;
    font-size: 0.7rem;
    display: grid;
    grid-template: "1fr 1fr 1fr";
    text-align: center;
    color: $grey;
    strong {
      font-size: 1rem;
      color: black;
    }
  }
  .plays-none {
    color: $grey;
    text-align: center;
  }

  .ago {
    text-align: right;
    font-size: 0.7rem;
    color: $grey;
    strong {
      font-size: 0.8rem;
      color: black;
    }
  }

  &.last-played-week {
    background-color: #d9e5f1;
  }
  // &.last-played-month{
  //     background-color: lightpink;
  // }
  // &.last-played-year{
  //     background-color: lightyellow;
  // }
  &.last-played-never {
    background-color: #fce8e8;
  }
}
.thumbnail-container {
  width: 70px;
  min-width: 70px;
  display: flex;
  margin-right: 10px;
}
.thumbnail {
  display: block;

  margin: auto;
  border-radius: 4px;
  width: auto;
  height: auto;
  max-width: 100%;
}

.content-container {
  flex-grow: 1;
  font-size: 1.1rem;
}
</style>
