<template>
  <div>
    <div>
      <Lander />
      <NextAbout />
      <slider />
      <TopShoot />
    </div>
  </div>
</template>

<script>
import Lander from "@/components/Lander.vue";
import TopShoot from "@/components/TopShoot.vue";
import NextAbout from "@/components/NextAbout.vue";
import slider from "@/components/slider.vue";
export default {
  components: {
    Lander,
    NextAbout,
    slider,
    TopShoot,
  },
};
</script>

<style>
</style>