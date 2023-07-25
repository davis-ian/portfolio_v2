<template>
  <div>
    <h2 class="ma-3">Some Things I've built..</h2>
    <div class="projects ma-3">
      <div v-for="(project, index) in projects" :key="index">
        <div class="project padding: pa-3" @click="openTab(project.link)">
          <!-- <div class="mb-2" style="font-size: 1.3rem">
            <span>{{ index + 1 }}. </span>
            <a :href="project.link" target="_blank"> {{ project.label }}</a>
          </div> -->
          <h3>{{ project.label }}</h3>
          <v-img
            class="elevation-2 my-3"
            style="
              border: none;
              border-radius: 5px;
              image-rendering: crisp-edges;
            "
            :lazy-src="project.image"
            :src="project.image"
          >
          </v-img>
          <!-- <div class="d-flex justify-center" style="gap: 10px; flex-wrap: wrap">
            <v-chip v-for="tech in project.techStack" :key="tech">{{
              tech.label
            }}</v-chip>
          </div> -->

          <!-- <v-card class="elevation-4">
            <div class="text-center">
            </div>
          </v-card> -->
        </div>

        <!-- <div class="text-center mt-4">
          <v-btn @click="openTab(project.link)"  >{{ project.label }}</v-btn>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import { projects } from "@/constants";
import upnext from "@/assets/images/upnext.png";
export default {
  data() {
    return {
      projects: projects,
      upnext,
    };
  },
  methods: {
    openTab(url) {
      window.open(url, "_blank");
    },
  },
};
</script>
<style lang="scss" scoped>
.projects {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.project {
  // border: 2px solid red;
  border-radius: 5px;
  background-color: #f0f0e8;
  // color: black;
}
a.button {
  // display: block;
  // text-align: center;
  font-size: 1.3rem;
  // padding: 1rem;
}

a {
  text-decoration: underline;
  // text-decoration-color: red;
  text-underline-offset: 2px;
}

.bold-shadow {
  box-shadow: 5px 5px black;
  transition: box-shadow 0.1s ease-in-out;
}

.bold-shadow:hover {
  box-shadow: none;
}

.project-link {
  overflow-wrap: break-word;
  hyphens: auto;
  display: block;
}
.featured-title {
  // font-family: "MigraBold";
  font-weight: 300;

  // font-family: "YoungSerif";
  // border: 2px solid red;
}
</style>
