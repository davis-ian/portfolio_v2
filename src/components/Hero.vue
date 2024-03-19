<template>
  <div class="hero-container d-flex flex-column justify-space-between">
    <h1 class="hero-container-title text-uppercase font-weight-black">
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
      <div class="mt-6">
        <v-btn @click="openEmail" size="large" variant="flat" color="black"
          >Book Free Consultation</v-btn
        >
      </div>
    </div>
  </div>
</template>
<script>
import profileImg from "@/assets/images/profile1.png";
import blobSvg from "@/assets/images/blob-svg1.svg";
import { scrollToAppTop, openEmail } from "@/utlities/utils";
export default {
  data() {
    return {
      profileImg,
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
  // border: 2px solid orange;
  min-height: 70vh;

  overflow-wrap: break-word;
  // -webkit-hyphens: auto;
  // -moz-hyphens: auto;
  // -ms-hyphens: auto;
  // hyphens: auto;

  h1 {
    line-height: 0.85;
  }

  &-title {
    font-size: clamp(8rem, 18vw, 20rem);
  }

  &-subtitle {
    font-size: clamp(1rem, calc(1rem + 0.8vw), 1.5rem);
  }
}
</style>
