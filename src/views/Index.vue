<template>
  <div>
    <div>
      <Lander />
      <NextAbout />
      <slider />
    </div>
  </div>
</template>

<script>
import Lander from "@/components/Lander.vue";

import NextAbout from "@/components/NextAbout.vue";
import slider from "@/components/slider.vue";
export default {
  components: {
    Lander,
    NextAbout,
    slider,
  },
};
</script>

<style>
</style>