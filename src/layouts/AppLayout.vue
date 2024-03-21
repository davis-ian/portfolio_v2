<template>
  <div>
    <nav-bar
      @toggle-drawer="drawer = !drawer"
      @nav-click="(val) => handleMenuNav(val)"
      @cta-click="openEmail"
      @set-light-theme="(val) => setLightTheme(val)"
      class="nav glass-blur bg-background"
      :nav-items="navItems"
    ></nav-bar>

    <v-navigation-drawer
      class="bg-background"
      location="bottom"
      style="height: 100%"
      v-model="drawer"
      temporary
    >
      <div class="d-flex justify-end pa-3">
        <v-btn @click="drawer = !drawer" icon variant="text">
          <font-awesome-icon icon="fa-solid fa-xmark"></font-awesome-icon>
        </v-btn>
      </div>
      <div style="min-height: calc(100% - 72px)" class="d-flex align-center">
        <v-list style="width: 100%">
          <v-list-item v-for="item in navItems">
            <h2 @click="handleMenuNav(item)" class="text-uppercase">
              {{ item.label }}
            </h2>
          </v-list-item>
        </v-list>
      </div>
    </v-navigation-drawer>

    <div class="layout-wrapper">
      <div class="layout-content">
        <div class="main">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/layouts/NavBar.vue";
import { openEmail } from "@/utlities/utils";
import { useTheme } from "vuetify";
export default {
  data() {
    return {
      drawer: false,
      theme: useTheme(),
      navItems: [
        { label: "Home", route: "home" },
        { label: "Work", route: "projects" },
        { label: "About", route: "about" },
        // { label: "Contact", route: "contact" },
        // { label: "Resume", route: "resume" },
      ],
    };
  },
  methods: {
    openEmail,
    handleMenuNav(navItem) {
      console.log(navItem, "nav item clicked");

      const el = document.getElementById(navItem.route);
      this.drawer = false;
      if (!el) return;

      const offset = 72;
      const elPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    },
    toggleTheme() {
      this.theme.global.name = this.theme.global.current.dark
        ? "light"
        : "dark";
    },
    setLightTheme(val) {
      this.theme.global.name = val == true ? "light" : "dark";
    },
  },
  components: {
    NavBar,
  },
  mounted() {},
};
</script>

<style lang="scss">
.layout-wrapper {
  // border: 3px solid lime;
  display: flex;
  flex-direction: column;
  align-items: center;
  // overflow-x: hidden;
  min-height: calc(100svh - 72px);
}
.layout-content {
  // border: 10px solid red;
  // min-height: 100%;
  width: 100%;
  max-width: 1600px;
}
.main {
  // border: 5px solid orange;
}

.nav {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  height: 72px;
  z-index: 100;
  border-bottom: 2px solid;
  //background-color: white;
}

.glass-blur {
  // backdrop-filter: blur(10px);
  // background-color: rgba(0, 0, 0, 0.4);
}

.nav-drawer {
  // height: calc(100% - 72px);
  color: red !important;
}
</style>
