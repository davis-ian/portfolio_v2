<template>
  <div>
    <nav-bar
      @toggle-drawer="drawer = !drawer"
      @nav-click="(val) => handleMenuNav(val)"
      @cta-click="openEmail"
      class="nav bg-background"
      :nav-items="navItems"
      ref="navBar"
    ></nav-bar>

    <v-navigation-drawer
      class="bg-background"
      style="height: 100%; width: 100%"
      v-model="showMenu"
      touchless
      temporary
    >
      <div class="d-flex justify-end pa-3">
        <v-btn
          aria-label="Nav Drawer Button"
          @click="toggleDrawer"
          icon
          variant="text"
        >
          <font-awesome-icon icon="fa-solid fa-xmark"></font-awesome-icon>
        </v-btn>
      </div>
      <div style="min-height: calc(100% - 72px)" class="d-flex align-center">
        <v-list style="width: 100%">
          <v-list-item v-for="item in navItems">
            <h1 @click="handleMenuNav(item)" class="text-uppercase">
              {{ item.label }}
            </h1>
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

export default {
  data() {
    return {
      drawer: false,
      showDial: true,
      navItems: [
        { label: "Home", route: "home" },
        { label: "Work", route: "projects" },
        { label: "About", route: "about" },
        // { label: "Contact", route: "contact" },
        // { label: "Resume", route: "resume" },
      ],
    };
  },
  computed: {
    showMenu() {
      return this.drawer && this.$vuetify.display.xs;
    },
  },
  components: {
    NavBar,
  },
  methods: {
    openEmail,
    updateLightTheme(val) {
      this.$refs.navBar.lightTheme = val;
    },
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    handleMenuNav(navItem) {
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
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.layout-wrapper {
  // border: 3px solid lime;
  display: flex;
  flex-direction: column;
  align-items: center;
  // overflow-x: hidden;
  min-height: calc(100svh - 72px);
}
.layout-content {
  width: 100%;
  max-width: 1600px;
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
.theme-speed-dial {
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 10;
}
.glass-blur {
  // backdrop-filter: blur(10px);
  // background-color: rgba(0, 0, 0, 0.4);
}
</style>
