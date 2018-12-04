<template>
  <div ref="carousel" class="carousel">
    <section v-for="(item, idx) in items" :key="idx">
      <slot name="item" :item="item"></slot>
    </section>
  </div>
</template>
<script>
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import $ from "jquery";
import "slick-carousel";
import sendAnalytics from "../helpers/analytics";

export default {
  props: ["items"],

  mounted() {
    $(this.$refs.carousel).slick();
  },

  updated() {
    sendAnalytics("updated");
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

<style>
</style>
