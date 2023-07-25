<template>
  <v-app>
    <v-main id="main">
      <!-- START: Custom header -->
      <!-- <header class="header" :class="elevation > 0 ? 'header--scrolling' : ''">
        <div class="d-flex align-center pa-2"><a href="/">Ian Davis</a></div>
        <div class="d-flex align-center pa-2"><a href="/about">About</a></div>
        <div class="d-flex align-center pa-2">Mode</div>
      </header> -->

      <div @click="menuShowing = !menuShowing" class="menu-icon">
        <font-awesome-icon
          style="font-size: 1.4rem"
          icon="fa-solid fa-bars"
        ></font-awesome-icon>
      </div>

      <v-navigation-drawer v-model="menuShowing" temporary>
        <v-list nav>
          <v-list-item>Home</v-list-item>
          <v-list-item>Projects</v-list-item>
          <v-list-item>About</v-list-item>
        </v-list>
      </v-navigation-drawer>
      <!-- END: Custom header -->
      <router-view class="rv" />
      <!-- <my-footer class="footer" /> -->
      <snackbar />
    </v-main>
  </v-app>
</template>

<script>
import MyFooter from "@/components/Footer.vue";
import Snackbar from "@/components/ui/Snackbar.vue";
import { useSnackbarStore } from "./store/snackbar";

export default {
  setup() {
    const snackbarStore = useSnackbarStore();
    return { snackbarStore };
  },
  data() {
    return {
      menuShowing: false,
      elevation: 0,
      darkMode: true,
    };
  },
  methods: {
    handleScroll() {
      const scrollPosition =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      this.elevation = scrollPosition > 0 ? 4 : 0;
    },
  },
  components: { Snackbar, MyFooter },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss">
.header {
  box-shadow: 0 0 0 transparent;
  transition: box-shadow 200ms ease-in-out;
  height: 4rem;
  position: fixed;
  top: 0;
  // background-color: #ebecf0;
  background-color: white;
  display: flex;
  justify-content: space-between;
  z-index: 100;
}

.header--scrolling {
  box-shadow: 0 0.2em 0.2em rgba(0, 0, 0, 0.4) !important;
}
.inknut {
  font-family: "Inknut Antiqua", serif;
}
.sofia {
  font-family: "Sofia Sans Extra Condensed", sans-serif;
}

.menu-icon {
  position: fixed;
  top: 0;
  right: 0;
  margin: 15px;
  cursor: pointer;
}
// .rv {
//   height: calc(100% - 64px)
// }
.rv {
  // border: 2px solid green;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
// .footer {
//   border: 2px solid orange
// }
#main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  // background-color: rgb(0, 0, 0);
  // color: white;
}

@font-face {
  font-family: "TuskerGrotesk";
  src: local("TuskerGrotesk"),
    url(./assets/fonts/TuskerGrotesk-1500Medium.otf) format("opentype");
}

@font-face {
  font-family: "BluuNext";
  src: local("BluuNext"),
    url(./assets/fonts/BluuNext-Bold.otf) format("opentype");
}
@font-face {
  font-family: "YoungSerif";
  src: local("YoungSerif"),
    url(./assets/fonts/YoungSerif-Regular.otf) format("opentype");
}
@font-face {
  font-family: "MigraBold";
  src: local("MigraBold"),
    url(./assets/fonts/Migra-Extrabold.otf) format("opentype");
}
@font-face {
  font-family: "MigraLight";
  src: local("MigraLight"),
    url(./assets/fonts/Migra-Extralight.otf) format("opentype");
}

@font-face {
  font-family: "ShermanDisplay";
  src: local("ShermanDisplay"),
    url(./assets/fonts/Sherman-Display.ttf) format("opentype");
}
</style>
