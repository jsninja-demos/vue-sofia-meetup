<template>
  <div id="app">
    <header>
      <img src="./assets/acronis_logo.png">
      <img src="./assets/logo.png">
      <div>Sofia Vue.js meetup #1</div>
      <div class="motto">{{ motto }}</div>
    </header>
    <section>
      <h3>Easy form validation with Vuelidate and Vuelidate-error-extractor</h3>
      <h4>Dobromir Hristov</h4>
      <h5>Lead FE Dev @ Hypefactors, Sofia</h5>
    </section>
    <section>
      <h3>Vue-cli 3: Modern Vue toolchain, babel7 ecosystem, webpack 4 improvements, production use-cases</h3>
      <h4>Andrey Khromyshev</h4>
      <h5>Team Lead @ Acronis, Sofia</h5>
    </section>
    <section>
      <h3>Complex animations with Vue.js? Easy!</h3>
      <h4>Sergei Kornienko</h4>
      <h5>Front end team leader @ Beta, Moscow</h5>
    </section>
    <section>
      <h3>VueJS in depth: templates, reactivity, magic</h3>
      <h4>Illya Klymov</h4>
      <h5>CEO @ JavaScript.Ninja, Kharkiv</h5>
    </section>
    <div>
      💖 {{ love }}
      <button @click="sendLove">I love this!</button>
    </div>
  </div>
</template>
<script>
import sendEvent from "./helpers/analytics";

const mottos = [
  "(1) VueJS is awesome!",
  "(2) VueJS is easy!",
  "(3) VueJS is fun!",
  "(4) VueJS is easy to learn!",
  "(5) VueJS is pure magic!"
];

export default {
  name: "App",

  data: () => ({
    love: 0,
    currentMottoIdx: 0
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

