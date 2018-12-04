<template>
  <div id="app">
    <header>
      <img src="./assets/acronis_logo.png">
      <img src="./assets/logo.png">
      <div>Sofia Vue.js meetup #1</div>
      <div class="motto">{{ motto }}</div>
    </header>
    <Carousel :items="talks" @afterChange="nextMotto" @swipe="sendAnalytics('swipe')">
      <template slot="item" slot-scope="item">
        <h3>VueJS in depth: templates, reactivity, magic</h3>
        <h4>Illya Klymov</h4>
        <h5>CEO @ JavaScript.Ninja, Kharkiv</h5>
      </template>
    </Carousel>

    <div>
      💖 {{ love }}
      <button @click="sendLove">I love this!</button>
    </div>
  </div>
</template>
<script>
import sendEvent from "./helpers/analytics";
import Carousel from "./components/Carousel";
import talks from "./data/talks";

const mottos = [
  "(1) VueJS is awesome!",
  "(2) VueJS is easy!",
  "(3) VueJS is fun!",
  "(4) VueJS is easy to learn!",
  "(5) VueJS is pure magic!"
];

export default {
  name: "App",
  components: {
    Carousel
  },

  data: () => ({
    love: 0,
    currentMottoIdx: 0,
    talks
  }),

  computed: {
    motto() {
      return mottos[this.currentMottoIdx];
    }
  },

  methods: {
    nextMotto() {
      this.currentMottoIdx += 1;
      if (this.currentMottoIdx === mottos.length) {
        this.currentMottoIdx = 0;
      }
    },

    sendAnalytics(event) {
      sendEvent(event);
    },

    sendLove() {
      this.love += 1;
      sendEvent("💖");
    }
  },

  mounted() {
    setInterval(() => this.nextMotto(), 20000);
  }
};
</script>

