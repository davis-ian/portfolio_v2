<template>
  <div class="hero-container d-flex flex-column justify-space-between">
    <h1
      style="margin-left: -5px"
      class="hero-container-title text-uppercase font-weight-black"
    >
      Full Stack Developer
    </h1>
    <div>
      <!-- <p>I build clean modern websites that embody the essence of your brand</p> -->

      <!-- <p class="hero-container-subtitle text-uppercase mt-4">
        Creative Developer Specializing in <br />
        <strong> Full Stack Web Development</strong>
      </p> -->
      <p class="hero-container-subtitle">
        I build clean and modern websites that focus on <strong>UX</strong> and
        <strong>performance</strong>.
      </p>
      <div class="mt-3">
        <v-btn
          @click="openEmail"
          size="large"
          color="primary"
          variant="flat"
          class="strong-shadow"
          >Book Free Consultation</v-btn
        >
      </div>
    </div>
  </div>
</template>
<script>
import blobSvg from "@/assets/images/blob-svg1.svg";
import { scrollToAppTop, openEmail } from "@/utlities/utils";
export default {
  data() {
    return {
      blobSvg,
      email: import.meta.env.VITE_EMAIL,
    };
  },
  methods: {
    openEmail,
  },
};
</script>
<style lang="scss" scoped>
.hero-container {
  min-height: 70vh;
  overflow-wrap: break-word;

  h1 {
    line-height: 0.75;
  }

  &-title {
    font-size: clamp(10rem, 20vw, 20rem);
  }

  &-subtitle {
    font-size: clamp(1rem, calc(1rem + 0.8vw), 1.5rem);
  }
}
</style>
