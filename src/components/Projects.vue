<template>
  <div class="projects-section d-flex flex-column">
    <h3 class="mb-3 text-lowercase">Selected Works</h3>
    <div class="flex-grow-1 d-flex flex-column justify-center">
      <v-row>
        <v-col cols="12" v-for="project in projects">
          <div class="mt-4">
            <div class="project-image-wrapper pa-5">
              <v-img
                @click="openTab(project.link)"
                v-if="project.image"
                style="max-width: 100%"
                aspect-ratio="1"
                :src="project.image"
                :lazy-src="project.image"
              ></v-img>
            </div>

            <div class="d-flex align-end">
              <h4 class="mt-2 mr-2">{{ project.label }}</h4>
              <i class="mb-1 text-italic" v-if="project.inProgress">In Work</i>
            </div>

            <p class="mt-1">
              {{ project.desc }}
            </p>

            <div class="d-flex mt-2" style="gap: 12px">
              <v-btn
                @click="openTab(project.link)"
                color="primary"
                variant="flat"
                class="strong-border"
                style="box-shadow: 2px 2px"
                >Website</v-btn
              >
              <v-btn
                class="strong-border"
                color="white"
                style="box-shadow: 2px 2px"
                @click="openTab(project.gh)"
                >GitHub</v-btn
              >
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="mt-12">
      <p>Like what you see? Let's talk:</p>
      <a @click="openEmail" class="text-decoration-underline"
        ><h5>{{ email }}</h5></a
      >
    </div>
  </div>
</template>
<script>
import { projects } from "@/constants";

import { useSnackbarStore } from "@/store/snackbar";
import { openEmail } from "@/utlities/utils.js";
export default {
  data() {
    return {
      projects,
      snackbar: useSnackbarStore(),
      email: import.meta.env.VITE_EMAIL,
    };
  },
  methods: {
    openEmail,
    openTab(val) {
      window.open(val);
    },
    handleDemoLink() {
      this.snackbar.showSnackbar({ message: "Please try again later" });
    },
    async pingProjectLinks() {
      try {
        for (let i = 0; i < this.projects.length; i++) {
          const project = this.projects[i];
          const response = await fetch(project.link, { mode: "no-cors" });

          // console.log(`${project.label} response: `, response);
        }
      } catch (error) {
        console.log("error pinging project urls", error);
      }
    },
  },
  mounted() {
    if (!window.location.host.includes("localhost")) {
      this.pingProjectLinks();
    }
  },
};
</script>
<style lang="scss" scoped>
.projects-section {
  // min-height: 60svh;
}

.image-black-and-white {
  filter: grayscale(70%);
}

.project-image-wrapper {
  max-width: 500px;
  box-shadow: 5px 5px 0;
  border: 2px solid;
  cursor: pointer;
}
</style>
