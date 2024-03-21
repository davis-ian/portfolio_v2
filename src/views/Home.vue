<template>
  <div class="d-flex flex-column">
    <div id="home" class="pa-3" style="border-bottom: 2px solid">
      <hero />
    </div>

    <Vue3Marquee pause-on-hover clone duration="3">
      <div style="border-bottom: 2px solid" class="d-flex align-center">
        <h1 class="mx-8 text-uppercase">Scroll</h1>
        <font-awesome-icon
          style="font-size: 4rem"
          icon="fa-solid fa-arrow-down"
        ></font-awesome-icon>
      </div>
    </Vue3Marquee>
    <div id="projects" class="pa-3" style="border-bottom: 2px solid">
      <projects />
    </div>

    <!-- <experience style="border: 1px solid" class="rounded-lg shadow-strong" /> -->

    <div id="about" class="pa-3" style="border-bottom: 2px solid">
      <about-me />
    </div>

    <div class="pa-3" style="border-bottom: 2px solid">
      <contact />
    </div>

    <div @click="scrollToAppTop" v-ripple class="text-center pa-6">
      <font-awesome-icon
        class="mr-2"
        icon="fa-solid fa-arrow-up"
      ></font-awesome-icon>
      <span class="text-button"> Back To Top </span>
      <font-awesome-icon
        class="ml-2"
        icon="fa-solid fa-arrow-up"
      ></font-awesome-icon>
    </div>
  </div>
</template>
<script>
import { useSnackbarStore } from "@/store/snackbar";
import Hero from "@/components/Hero.vue";
import Projects from "@/components/Projects.vue";
import Experience from "@/components/Experience.vue";
import Contact from "@/components/Contact.vue";
import AboutMe from "@/components/AboutMe.vue";
import { scrollToAppTop } from "@/utlities/utils";
import { Vue3Marquee } from "vue3-marquee";

export default {
  setup() {
    const snackbar = useSnackbarStore();
    return { snackbar };
  },
  components: { Hero, Projects, Experience, Contact, AboutMe },
  methods: {
    openTab(url) {
      window.open(url, "_blank");
    },
    scrollToAppTop,
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.shadow-strong {
  box-shadow: 10px 10px;
}
</style>
