<template>
  <v-app id="app">
    <v-main>
      <app-layout id="app-layout">
        <!-- <router-view /> -->

        <router-view v-slot="{ Component }">
          <transition>
            <component :is="Component"></component>
          </transition>
        </router-view>
      </app-layout>
      <snackbar />
    </v-main>
  </v-app>
</template>

<script>
import AppLayout from "@/layouts/AppLayout.vue";

import Snackbar from "@/components/ui/Snackbar.vue";
import { useSnackbarStore } from "./store/snackbar";
import { useTheme } from "vuetify";
import { onMounted } from "vue";

export default {
  data() {
    return {
      menuItems: [
        { label: "Home", link: "#home" },
        { label: "About", link: "#about" },
      ],
      theme: useTheme(),
      snackbar: useSnackbarStore(),
    };
  },
  mounted() {
    this.updateThemeColor();
  },
  methods: {
    updateThemeColor() {
      const bgColor = this.$vuetify.theme.current.colors.background;
      const metaThemeColor = document.querySelector("meta[name=theme-color]");
      if (metaThemeColor) {
        metaThemeColor.setAttribute("content", bgColor);
      }
    },
  },
  components: { Snackbar, AppLayout },
};
</script>

<style lang="scss">
#app {
  // background-color: black;
  // color: white;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  // font-family: "YoungSerif", serif;
  // font-family: "Inter", sans-serif;
  // font-family: "GT America Condensed", sans-serif;
  // font-family: "DM Sans", sans-serif;
  font-weight: 700 !important;
  // font-family: "FiraSans", sans-serif;
  font-family: "Sofia Sans Extra Condensed", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
/* Global styles for headings to match Vuetify's Material Design typography */
h1 {
  font-size: 6rem; /* 96px */
  font-weight: 300;
  line-height: 1.167;
  letter-spacing: -0.01562em;
}

h2 {
  font-size: 3.75rem; /* 60px */
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: -0.00833em;
}

h3 {
  font-size: 3rem; /* 48px */
  font-weight: 400;
  line-height: 1.167;
  letter-spacing: 0em;
}

h4 {
  font-size: 2.125rem; /* 34px */
  font-weight: 400;
  line-height: 1.235;
  letter-spacing: 0.00735em;
}

h5 {
  font-size: 1.5rem; /* 24px */
  font-weight: 400;
  line-height: 1.334;
  letter-spacing: 0em;
}

h6 {
  font-size: 1.25rem; /* 20px */
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.0075em;
}

html {
  background-color: var(--v-background-base);
}
body,
.v-application {
  // font-family: "DM Sans", sans-serif;
  font-family: "Sofia Sans", sans-serif;
  // font-family: "GT America", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;

  background-color: var(--v-background-base);

  -webkit-font-smoothing: antialiased; /* For Chrome and Safari */
  -moz-osx-font-smoothing: grayscale;
}

p {
  text-wrap: pretty;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  color: rgb(var(--v-theme-font));
}

.button-shadow {
  border: 2px solid rgb(var(--v-theme-font));
  box-shadow: 3px 3px rgb(var(--v-theme-font));
  transition: 0.3s;
}

.button-shadow:hover {
  // box-shadow: none;
  box-shadow: none;
  transform: translateY(3px); /* Slightly move the button down */
}

.strong-border {
  border: 2px solid;
}

.pointer {
  cursor: pointer !important;
}

.outline-text {
  color: transparent;
  -webkit-text-stroke: 1px black;
}

// @font-face {
//   font-family: "TuskerGrotesk";
//   src: local("TuskerGrotesk"),
//     url(./assets/fonts/TuskerGrotesk-1500Medium.otf) format("opentype");
// }

// @font-face {
//   font-family: "BluuNext";
//   src: local("BluuNext"),
//     url(./assets/fonts/BluuNext-Bold.otf) format("opentype");
// }
// @font-face {
//   font-family: "YoungSerif";
//   src: local("YoungSerif"),
//     url(./assets/fonts/YoungSerif-Regular.otf) format("opentype");
// }
// @font-face {
//   font-family: "MigraBold";
//   src: local("MigraBold"),
//     url(./assets/fonts/Migra-Extrabold.otf) format("opentype");
// }

@font-face {
  font-family: "GT America";
  src: local("GT-America-Standard-Medium"),
    url(./assets/fonts/GT-America-Standard-Medium.otf) format("opentype");
}

@font-face {
  font-family: "GT America Condensed";
  src: local("GT-America-Condensed-Bold"),
    url(./assets/fonts/GT-America-Condensed-Bold.otf) format("opentype");
}
</style>
