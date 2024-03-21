<template>
  <div class="d-flex flex-column">
    <div id="home" class="pa-3" style="border-bottom: 2px solid">
      <hero />
    </div>

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

    <div class="text-center pa-3">
      <v-btn @click="scrollToAppTop" variant="text">
        <font-awesome-icon
          class="mr-2"
          icon="fa-solid fa-arrow-up"
        ></font-awesome-icon>
        <span> Back To Top </span>
        <font-awesome-icon
          class="ml-2"
          icon="fa-solid fa-arrow-up"
        ></font-awesome-icon>
      </v-btn>
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
