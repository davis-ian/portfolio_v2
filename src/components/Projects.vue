<template>
  <div class="projects-section d-flex flex-column">


<h3 class="text-lowercase mt-3 mb-6" style="border-top: 2px solid; border-bottom: 2px solid">Selected Works</h3>
    <div>

      <div class="mb-12 " style=" display: flex; flex-direction: column; align-items: center" >
        <div class="featured-container">
        <video class="video-player rounded" :src="videoSrc" autoplay muted loop playsinline></video>
        <div class="mt-4 d-flex align-end">
              <h4 class="mr-2">Forma</h4>
              <i class="mb-1 text-italic" >In Work</i>
            </div>
            <p>Forma is a minimalist 3D action prototype built to demonstrate advanced frontend engineering, real-time rendering, and modular game architecture. Developed with Vue 3, TypeScript, and Three.js, it features a hand-rolled ECS (Entity Component System) engine designed for clarity, performance, and extensibility.

Originally conceived as a food-themed roguelite, Forma evolved beyond that into a genre-agnostic combat sandbox — emphasizing clean systems over visual gimmicks.</p>

        <div class="d-flex mt-2" style="gap: 12px">
              <v-btn
                @click="openTab('https://forma.iandavis.dev/')"
                color="primary"
                variant="flat"
                class="button-shadow"
                aria-label="Website Demo Button"
                >Play</v-btn
              >
              <v-btn

                class="button-shadow"
                color="white"
                @click="openTab('https://github.com/davis-ian/forma')"
                aria-label="Github Link Button"
                >GitHub</v-btn
              >
            </div>
        </div>
      </div>
    </div>


    <div class="flex-grow-1 d-flex flex-column justify-center">
      <v-row>
        <v-col cols="12" sm="4" v-for="project, index in projects" :key="index" class="d-flex" >

          <div class="mt-6 flex-grow-1 d-flex flex-column justify-space-between ">
            <div >
            <div class="project-image-wrapper button-shadow pa-5 rounded">
              <v-img
                @click="openTab(project.link)"
                v-if="project.image"
                style="max-width: 100%"
                aspect-ratio="1"
                :src="project.image"
                :lazy-src="project.image"
                alt="Project Image"
              ></v-img>
            </div>

            <div class="mt-4 d-flex align-end">
              <h4 class="mr-2">{{ project.label }}</h4>
              <i class="mb-1 text-italic" v-if="project.inProgress">In Work</i>
            </div>

            <p class="mt-1">
              {{ project.desc }}
            </p>
            </div>

            <div class="d-flex mt-2" style="gap: 12px">
              <v-btn
                @click="openTab(project.link)"
                color="primary"
                variant="flat"
                class="button-shadow"
                aria-label="Website Demo Button"
                >Website</v-btn
              >
              <v-btn
                v-if="project.gh"
                class="button-shadow"
                color="white"
                @click="openTab(project.gh)"
                aria-label="Github Link Button"
                >GitHub</v-btn
              >
            </div>
          </div>

        </v-col>
      </v-row>
    </div>
    <div class="mt-12">
      <p>Like what you see? Let's talk:</p>
      <p @click="openEmail" class="text-decoration-underline pointer"
        ><h5>{{ email }}</h5>
        </p>
    </div>
  </div>
</template>
<script>
import { projects } from "@/constants";

import { useSnackbarStore } from "@/store/snackbar";
import { openEmail } from "@/utlities/utils.js";

import videoSrc from '@/assets/videos/forma-demo.mp4?url'


export default {
  data() {
    return {
      projects,
      snackbar: useSnackbarStore(),
      email: import.meta.env.VITE_EMAIL,
      videoSrc
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
  // box-shadow: 5px 5px 0;
  // border: 2px solid;
  cursor: pointer;
}
.featured-container {
  max-width: 850px;

  .video-player {
    max-width: 100%;
  }
}
</style>
