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
    // this.adjustHeadingFontWeightForSafari();
  },
  methods: {
    updateThemeColor() {
      const bgColor = this.$vuetify.theme.current.colors.background;
      const metaThemeColor = document.querySelector("meta[name=theme-color]");
      if (metaThemeColor) {
        metaThemeColor.setAttribute("content", bgColor);
      }
    },
    adjustHeadingFontWeightForSafari() {
      // Regex to detect Safari browser. This checks the user agent string
      // to identify if the browser is Safari by excluding Chrome and Android browsers,
      // which also use "Safari" in their user agent strings.
      const isSafari = /^((?!chrome|android).)*safari/i.test(
        navigator.userAgent
      );

      // If the browser is Safari, adjust the CSS variable for heading font weight.
      if (isSafari) {
        // Setting a CSS variable '--heading-font-weight' on the document root.
        // This variable can then be used within CSS to conditionally apply styles
        // for Safari browsers.
        document.documentElement.style.setProperty(
          "--heading-font-weight",
          "590"
        );
      }
    },
  },
  components: { Snackbar, AppLayout },
};
</script>

<style lang="scss">
:root {
  --heading-font-weight: 700;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: var(--heading-font-weight) !important;
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
  font-family: "Sofia Sans", sans-serif;
  // font-family: "GT America", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;

  background-color: var(--v-background-base);

  -webkit-font-smoothing: antialiased; /* For Chrome and Safari */
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
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

a {
  transition: 0.2s;
}
a:hover {
  color: rgb(var(--v-theme-font)) !important;
}
a:visited {
  color: #207361;
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
//   font-family: "BluuNext";
//   src: local("BluuNext"),
//     url(./assets/fonts/BluuNext-Bold.otf) format("opentype");
// }

@font-face {
  font-family: "Sofia Sans";
  src: local("Sofia Sans"),
    url(./assets/fonts/SofiaSans-VariableFont_wght.ttf) format("truetype");
  font-display: swap;
  font-weight: 100 900;
}

@font-face {
  font-family: "Sofia Sans Extra Condensed";
  src: local("Sofia Sans Condensed"),
    url(./assets/fonts/SofiaSansExtraCondensed-VariableFont_wght.ttf)
      format("truetype");
  font-display: swap;
  font-weight: 100 900;
}
</style>
