<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="home-wrapper">
      <div class="home-content">
        <div class="pa-3" style="margin-bottom: 150px" id="home">
          <hero />
        </div>

        <div style="margin-bottom: 150px" id="projects">
          <project-list />
        </div>

        <div style="margin-bottom: 150px" id="about">
          <about-me />
        </div>

        <div style="margin-bottom: 150px" id="contact">
          <contact />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useSnackbarStore } from "@/store/snackbar";
import Contact from "@/components/Contact.vue";
import ProjectList from "@/components/ProjectList.vue";
import AboutMe from "@/components/AboutMe.vue";
import Hero from "@/components/Hero.vue";

export default {
  setup() {
    const snackbar = useSnackbarStore();
    return { snackbar };
  },
  components: { ProjectList, Hero, AboutMe, Contact },
  methods: {
    openTab(url) {
      window.open(url, "_blank");
    },
  },
};
</script>
<style lang="scss">
.full-screen-height {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  // border: 2px solid red;

  .full-width {
    width: 100%;
  }
}

.btn-shadow {
  box-shadow: 5px 5px black;
  transition: box-shadow 0.1s ease-in-out;
}

.btn-shadow:active {
  box-shadow: none;
}

.home-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.home-content {
  // border: 5px solid black;
  width: 100%;
  max-width: 1400px;
}
</style>
