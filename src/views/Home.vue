<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="home-container">
    <div
      style="
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        padding-bottom: 10vh;
      "
    >
      <hero />
    </div>

    <div
      style="
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
      "
    >
      <project-list />
    </div>

    <!-- <div>
      <about-me />
    </div> -->

    <!-- <v-row>
      <v-col>
        <contact id="contact" />
      </v-col>
    </v-row> -->
  </div>
</template>
<script>
import { useSnackbarStore } from "@/store/snackbar";
// import Contact from "@/components/Contact.vue";
import ProjectList from "@/components/ProjectList.vue";
import AboutMe from "@/components/AboutMe.vue";
import Hero from "@/components/Hero.vue";

export default {
  setup() {
    const snackbar = useSnackbarStore();
    return { snackbar };
  },
  components: { ProjectList, Hero, AboutMe },
  methods: {
    openTab(url) {
      window.open(url, "_blank");
    },
  },
};
</script>
<style lang="scss">
.home-container {
  // min-height: 100vh;
  // padding: 16px;
}

.btn-shadow {
  box-shadow: 5px 5px black;
  transition: box-shadow 0.1s ease-in-out;
}

.btn-shadow:active {
  box-shadow: none;
}
</style>
