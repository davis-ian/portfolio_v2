<template>
  <div class="pa-3">
    <div class="d-flex justify-space-between align-center">
      <h3 v-if="selectedProject">{{ selectedProject.label }}</h3>
      <v-spacer v-else></v-spacer>
      <v-btn
        variant="flat"
        color="black"
        size="small"
        aria-label="Back Button"
        @click="$router.back()"
      >
        <font-awesome-icon
          icon="fa-solid fa-arrow-left"
          class="mr-2"
        ></font-awesome-icon>
        <span> Back </span>
      </v-btn>
    </div>

    <div v-if="selectedProject">
      <div class="mt-3">
        <p v-for="i in 3">To Do</p>
      </div>
      <div class="d-flex mt-3" style="gap: 12px">
        <v-btn color="black" variant="flat" aria-label="Website Button"
          >Website</v-btn
        >
        <v-btn variant="outlined" aria-label="Github Button">Github</v-btn>
      </div>

      <div class="mt-3" style="border: 2px solid red">
        {{ selectedProject }}
      </div>
    </div>
  </div>
</template>
<script>
import { projects } from "@/constants";
export default {
  data() {
    return {
      projects,

      selectedProject: null,
      projectDoesNotExist: false,
    };
  },
  methods: {
    getProjectDetails(name) {
      let found = this.projects.find((p) => p.label == this.$route.params.name);

      if (found) {
        this.selectedProject = found;
      } else {
        this.$router.push({ path: "/404" });
      }
    },
  },
  mounted() {
    this.getProjectDetails();
  },
};
</script>
<style lang=""></style>
