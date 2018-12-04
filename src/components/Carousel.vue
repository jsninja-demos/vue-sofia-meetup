<template>
  <div ref="carousel" class="carousel">
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
  </div>
</template>
<script>
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import $ from "jquery";
import "slick-carousel";

export default {
  mounted() {
    $(this.$refs.carousel).slick();
  },

  watch: {
    $listeners: {
      handler(listeners, oldListeners) {
        this.$nextTick(() => {
          const $c = $(this.$refs.carousel);

          Object.entries(oldListeners || []).forEach(([event, fn]) => {
            $c.off(event, fn);
          });

          Object.entries(listeners).forEach(([event, fn]) => {
            $c.on(event, fn);
          });
        });
      },
      immediate: true
    }
  }
};
</script>
