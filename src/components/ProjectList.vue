<template>
  <div style="position: relative" class="pa-3">
    <h1 class="my-3">Featured Work</h1>
    <div v-if="selectedWork">
      {{ selectedWork.label }}
    </div>

    <div style="border: 2px solid red; display: flex; justify-content: center">
      <div
        v-if="!selectedWork"
        class="ma-5"
        style="
          background-color: black;
          aspect-ratio: 16/9;
          border-radius: 5px;
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        <h1 style="color: white">....</h1>
      </div>
      <v-img max-width="700px" :src="selectedWork.image"></v-img>
    </div>
    <div style="display: flex; flex-direction: column">
      <div
        style="
          border: 2px solid orange;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        "
      >
        <div
          @click="selectWork(item)"
          style="z-index: 5"
          class="project-list-item"
          v-for="(item, index) in projects"
          :key="index"
        >
          <p class="orig-label" :class="handleSelectedClass(item)">
            {{ item.label }}
          </p>
          <h4 class="styled-label" :class="handleSelectedClass(item)">
            {{ item.label }}
          </h4>
          <!-- <v-expand-transition>
          <div v-show="selectedWork?.label == item.label">
            <div v-if="selectedWork != null">
              <v-img :src="selectedWork.image"></v-img>
            </div>
          </div>
        </v-expand-transition> -->
        </div>
      </div>
      <!-- <div style="margin-top: 50px">
        <div
          v-if="selectedWork"
          style="border: 1px solid; border-radius: 5px; box-shadow: 5px 5px"
        >
          <h1>{{ selectedWork.label }}</h1>
          <v-img max-width="400px" :src="selectedWork.image"></v-img>
        </div>
      </div> -->
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
      selectedWork: null,
      showSelected: false,
      refreshKey: 0,
    };
  },
  methods: {
    openTab(url) {
      window.open(url, "_blank");
    },
    selectWork(item) {
      console.log(item, "item");
      this.selectedWork = item;
      this.showSelected = true;
      this.refreshKey++;
    },
    handleSelectedClass(item) {
      if (this.selectedWork.label == item.label) {
        return "";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
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
  font-weight: 300;
}

.project-list-item {
  font-size: 2rem;
  text-transform: uppercase;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  overflow: hidden;
  position: relative;
}

.orig-label {
  transition-duration: 0.3s;
  position: relative;
  top: 0;
  height: 100%;
}
.styled-label {
  color: #3fb27f;
  transition-duration: 0.3s;
  position: absolute;
  top: 55px;
  width: 100%;
}
.project-list-item:hover {
  // font-family: "YoungSerif", serif;
  border-top: 2px solid;
  border-bottom: 2px solid;

  .orig-label {
    transform: translateY(-50px);
  }
  .styled-label {
    transform: translateY(-50px);
  }
}

.label-sel {
  .orig-label {
    transform: translateY(-50px);
  }
  .styled-label {
    transform: translateY(-50px);
  }
}

.grid-container {
  display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-columns: 1fr;
  gap: 20px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr 1fr;
  }

  // .grid-item-0 {
  //   border: 5px solid lime;
  // }
}
</style>
