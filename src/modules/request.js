import dayjs from "dayjs";

const initialWait = 100;

const endpoint = "https://www.boardgamegeek.com/xmlapi2/";
const bggUriBase = "https://boardgamegeek.com/boardgame/";

const today = dayjs();

export default {
  async xml(uri, wait = null) {
    if (!wait) {
      wait = initialWait;
    }

    return fetch(uri)
      .then((response) => {
        if (response.status === 200) {
          return response.text();
        } else if (response.status === 202) {
          let promise = new Promise((resolve) => {
            setTimeout(() => {
              resolve(this.xml(uri, wait));
            }, wait);
          });

          wait *= 2;
          return promise;
        } else {
          /**
           * @todo
           */
        }
      })
      .then((body) => {
        if (body instanceof Document) {
          return body;
        }
        return new window.DOMParser().parseFromString(body, "text/xml");
      });
  },
  collection(username) {
    return this.xml(
      `${endpoint}collection?username=${username}&own=1&subtype=boardgame&excludesubtype=boardgameexpansion`
    ).then((root) => {
      let collection = {};
      Array.from(root.getElementsByTagName("item")).forEach((item) => {
        const id = item.getAttribute("objectid");
        let thumbnail = null;
        if (item.getElementsByTagName("thumbnail")[0]) {
          thumbnail = item.getElementsByTagName("thumbnail")[0].innerHTML;
        }
        collection[id] = {
          id,
          name: item.getElementsByTagName("name")[0].innerHTML,
          uri: `${bggUriBase}${id}`,
          thumbnail,
          playCount: 0,
          lastPlay: null,
          lastPlayAgo: null,
          plays: [],
        };
      });
      return collection;
    });
  },
  plays(username) {
    return this.xml(`${endpoint}plays?username=${username}&own=1`).then(
      (root) => {
        let plays = {};
        Array.from(root.getElementsByTagName("play")).forEach((play) => {
          const item = play.getElementsByTagName("item")[0];
          const id = item.getAttribute("objectid");

          if (!plays[id]) {
            plays[id] = [];
          }

          plays[id].push({
            date: play.getAttribute("date"),
          });
        });

        return plays;
      }
    );
  },
  fetch(username) {
    return Promise.all([this.collection(username), this.plays(username)]).then(
      (values) => {
        let collection, plays;
        [collection, plays] = values;

        for (const [key, value] of Object.entries(plays)) {
          let game = collection[key];
          if (game) {
            game.playCount = value.length;
            game.lastPlay = dayjs(value[0].date);
            game.lastPlayAgo = today.diff(game.lastPlay, "day");
            game.plays = value;
          }
        }

        return Object.values(collection);
      }
    );
  },
};
