<template>
  <div class="d-flex flex-column">
    <div id="home" class="pa-5">
      <hero />
    </div>

    <Vue3Marquee class="marque-container" clone :duration="3">
      <div class="d-flex align-center">
        <h4 class="mx-8 text-uppercase">Scroll</h4>
        <font-awesome-icon
          style="font-size: 1.5rem"
          icon="fa-solid fa-arrow-down"
        ></font-awesome-icon>
      </div>
    </Vue3Marquee>

    <div id="projects" class="pa-5">
      <projects />
    </div>

    <div class="strong-divider"></div>
    <!-- <experience style="border: 1px solid" class="rounded-lg shadow-strong" /> -->

    <div id="about" class="pa-5">
      <about-me />
    </div>

    <div class="strong-divider"></div>

    <div class="pa-5">
      <contact />
    </div>

    <div class="strong-divider"></div>

    <div @click="scrollToAppTop" v-ripple class="text-center pa-6 pointer">
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
import { useMeta } from "vue-meta";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    useMeta({
      title: "Test Title",
    });

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
});
</script>
<style lang="scss" scoped>
.shadow-strong {
  box-shadow: 10px 10px;
}

.strong-divider {
  border-bottom: 2px solid;
}

.marque-container {
  border-top: 2px solid;
  border-bottom: 2px solid;
}
</style>
