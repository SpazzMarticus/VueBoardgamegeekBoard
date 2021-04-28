<template>
  <div v-if="showForm">
    <label>
      BoardGameGeek - Username<br />
      <input v-model="username" v-on:keyup.enter="submit" />
      <small>
        Enter your BGG username and submit.
        <br />
      </small>
    </label>
    <label>
      <button type="button" @click="submit" :disabled="!username">
        Submit
      </button>
    </label>
  </div>
  <div v-else class="flex">
    <a class="button" v-if="permalink" :href="permalink">Permalink</a>
    <button type="button" @click="reset">Reset</button>
  </div>
  <Board :username="submittedUsername" v-if="submittedUsername" />
</template>

<script>
import Board from "./components/Board.vue";

let username = null;

/**
 * Fetch username from query string, if possible
 */
const params = new URLSearchParams(window.location.search);
if (params.has("username")) {
  username = params.get("username");
}

const pushUri = (username = null) => {
  let url = new URL(window.location);
  let key = "username";
  if (username) {
    url.searchParams.set(key, username);
  } else {
    url.searchParams.delete(key);
  }
  window.history.pushState({}, "", url);
};

export default {
  name: "App",
  components: {
    Board,
  },
  data() {
    return {
      username,
      showForm: !username,
      submittedUsername: username ?? null,
    };
  },
  computed: {
    permalink() {
      if (this.username) {
        return `https://spazzmarticus.github.io/VueBoardgamegeekBoard/?username=${this.username}`;
      }
      return null;
    },
  },
  methods: {
    reset() {
      this.showForm = true;
      this.submittedUsername = null;
      pushUri();
    },
    submit() {
      this.showForm = false;
      this.submittedUsername = this.username;
      pushUri(this.username);
    },
  },
};
</script>

<style lang="scss">
@import "node_modules/normalize.css/normalize";

$bodyPadding: 1rem;
$playAreaPadding: 0.5rem;
$playAreaSelectedMargin: 0.5rem;
$defaultBorderRadius: 0.33rem;
$diceSize: 3.5rem;
$gridGap: 1rem;

$themeBackground: #fdfdfd;
$themeLinkColor: rgb(19, 87, 56);
$themeTextLight: #575757;
$themeSelected: #3b3a42;
$themeTable: #d1b494;
$themeTray: #cccccc;
$themeSettings: #dedede;

$minWidthSmall: (2 * $bodyPadding)+ (4 * $playAreaPadding)+
  (2 * $playAreaSelectedMargin)+ (6 * $gridGap)+ (7 * $diceSize);

* {
  box-sizing: border-box;
}

html {
  font-size: 1rem;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue",
    Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  background-color: $themeBackground;
  height: 100vh;
}

body {
  max-width: 800px;
  margin: 0 auto;
  padding: 5px $bodyPadding;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: scroll;
}

a {
  color: $themeLinkColor;
  text-decoration: none;
  text-decoration: underline;
}

.header {
  color: $themeTextLight;
  text-align: center;

  h1 {
    margin: 0;
  }

  p {
    margin: 0 0 1rem 0;
  }
}

.footer {
  color: $themeTextLight;
  padding: 1rem;
  font-size: 0.7rem;
  text-align: center;
  line-height: 1.5;
  margin-top: auto;
}

label {
  display: flex;
  flex-direction: column;
  padding: 0;
  line-height: 1.5;
  margin-bottom: 1rem;
}
input {
  display: block;
  border: 1px solid grey;
  border-radius: 4px;
  padding: 4px;
  margin: 4px 0;
  line-height: 1;
}
button,
.button {
  display: inline-block;
  font-size: 100%;
  padding: 4px;
  border-radius: 4px;
  background-color: $themeLinkColor;
  box-shadow: none;
  color: white;
  border: 2px solid $themeLinkColor;
  cursor: pointer;
  text-decoration: none;
  line-height: 1;
  &[disabled] {
    background-color: #3b3a42;
    border-color: #3b3a42;
    cursor: not-allowed;
  }

  .icon {
    height: 1.5rem;
    widows: 1.5rem;
  }
}

.flex {
  display: flex;
  justify-content: space-between;
}
.center {
  display: flex;
  justify-content: center;
}

pre {
  border: 1px solid black;
}
</style>
