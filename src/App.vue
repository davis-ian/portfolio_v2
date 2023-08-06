<template>
  <v-app>
    <!-- START: Nav -->
    <div class="menu-section">
      <div
        style="linear-gradient(180deg,#161616,rgba(22,22,22,0));"
        class="gradient"
      ></div>
      <div style="gap: 5px; z-index: 10" class="logo d-flex">
        <h4>IAN</h4>
        <h4>DAVIS</h4>
      </div>

      <!-- START: Mobile Menu -->
      <div
        style="z-index: 10"
        @click="menuShowing = !menuShowing"
        class="mobile-nav"
      >
        <font-awesome-icon
          style="font-size: 1.4rem"
          icon="fa-solid fa-bars"
        ></font-awesome-icon>
      </div>
      <!-- END: Mobile Menu -->

      <!-- START:  Desk Menu-->
      <div style="z-index: 10" class="desk-nav">
        <div v-for="(item, index) in menuItems" :key="index">
          <a class="nav-link" :href="item.link">{{ item.label }}</a>
          <span v-if="index != menuItems.length - 1" style="margin-left: 15px"
            >/</span
          >
        </div>
      </div>
      <!-- END:  Desk Menu-->
    </div>

    <v-navigation-drawer
      temporary
      class="drawer-container"
      v-model="menuShowing"
    >
      <div class="drawer-top">
        <div @click="menuShowing = !menuShowing">
          <font-awesome-icon
            style="font-size: 1.4rem"
            icon="fa-solid fa-xmark"
          ></font-awesome-icon>
        </div>
      </div>
      <div class="drawer-nav">
        <div v-for="(item, index) in menuItems" :key="index">
          <a class="nav-link" :href="item.link">
            <h1 class="text-center">{{ item.label }}</h1>
          </a>
        </div>
      </div>
    </v-navigation-drawer>

    <!-- END: Nav -->
    <v-main id="main">
      <router-view style="margin-top: 150px" class="rv" />
      <!-- <my-footer class="footer" /> -->
      <snackbar />
    </v-main>

    <!-- <div class="loading-container"></div> -->
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
      menuItems: [
        { label: "Home", link: "#home" },
        { label: "Projects", link: "#projects" },
        { label: "About", link: "#about" },
        { label: "Contact", link: "#contact" },
      ],
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

  display: flex;
  justify-content: space-between;
  z-index: 100;
}

.outlined-text {
  color: white; /* Set the color of the text */
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    1px 1px 0 black; /* Create an outline effect */
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

.gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #ffffff, rgba(22, 22, 22, 0));
}
.menu-section {
  // background-color: white;
  padding: 15px;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 5;
  height: 150px;
  .menu-icon {
    cursor: pointer;
  }

  .logo {
    line-height: 1rem;
  }
}

.desk-nav {
  display: none;
}

.drawer-nav {
  height: calc(100% - 65px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;

  .nav-link {
    font-size: 1.5rem;
    text-decoration: none;
    color: #151515;
  }
}

.drawer-top {
  display: flex;
  justify-content: flex-end;
  padding: 15px;
}

.drawer-container {
  width: 100vw !important;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9000;
}

@media (min-width: 768px) {
  .mobile-nav {
    display: none;
  }

  // .drawer-container {
  //   display: none !important;
  // }

  .desk-nav {
    display: flex;
    gap: 15px;

    .nav-link {
      color: #151515;
      text-decoration: none;
    }
    .nav-link:hover {
      color: #01c6ac;
      text-decoration: line-through;
    }
  }
}

// .rv {
//   display: flex;
//   flex-direction: column;
//   flex-grow: 1;
// }
// .footer {
//   border: 2px solid orange
// }
#main {
  // min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: #151515;
  // background-color: #ef5267;
  // color: #f3d684;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "YoungSerif", serif;
  // font-family: "Windsor";
}

body {
  font-family: "FiraSans", sans-serif;
}

.nav-control-bar {
  padding: 15px;
  display: flex;
  justify-content: flex-end;
  border: 2px solid red;
}

.nav-control-bar:hover {
  border: 5px solid blue;
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
@font-face {
  font-family: "PhageRegular";
  src: local("PhageRegular"),
    url(./assets/fonts/Phage-Regular.otf) format("opentype");
}
@font-face {
  font-family: "PhageRough";
  src: local("PhageRough"),
    url(./assets/fonts/Phage-Rough.otf) format("opentype");
}
@font-face {
  font-family: "Manifesto";
  src: local("Manifesto"), url(./assets/fonts/Manifesto.ttf) format("opentype");
}
@font-face {
  font-family: "FiraSans";
  src: local("FiraSans-Regular"),
    url(./assets/fonts/FiraSans-Regular.ttf) format("opentype");
}
@font-face {
  font-family: "MolenSurplus";
  src: local("Molen-Surplus"),
    url(./assets/fonts/Molen-Surplus.otf) format("opentype");
}

@font-face {
  font-family: "PerfectlyAbstract";
  src: local("PerfectlyAbstract"),
    url(./assets/fonts/Perfectly-Abstract.otf) format("opentype");
}
@font-face {
  font-family: "Windsor";
  src: local("Windsor-Regular"),
    url(./assets/fonts/Windsor-Regular.ttf) format("opentype");
}
</style>
