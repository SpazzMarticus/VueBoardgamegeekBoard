<template>
  <div class="game" :class="classNames">
    <div class="thumbnail-container">
      <img :src="game.thumbnail" class="thumbnail" />
    </div>
    <div class="content-container">
      <div class="flex">
        <a
          class="name"
          :href="game.uri"
          target="_blank"
          rel="nofollow noopener"
          >{{ game.name }}</a
        >
        <slot name="button"></slot>
      </div>
      <div v-if="game.playCount">
        <small>
          <strong>{{ game.playCount }}</strong> plays logged,<br />
          <span v-if="game.lastPlayAgo === 0"> played today </span
          ><span v-else> last {{ game.lastPlayAgo }} days ago </span>
        </small>
      </div>
      <div v-else>
        <small> no plays logged </small>
      </div>
    </div>
  </div>
</template>
<script>
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
  },
};
</script>
<style lang="scss" scoped>
.game {
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;

  background-color: #efefef;

  .name {
    display: block;
    font-size: 1.3rem;
    margin-bottom: 4px;
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
