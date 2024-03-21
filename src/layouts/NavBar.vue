<template>
  <div>
    <nav class="d-flex justify-space-between align-center pa-3">
      <h5 class="pointer text-uppercase" @click="$router.push('/')">
        Ian Davis
      </h5>

      <div class="d-flex" style="gap: 12px">
        <v-switch
          v-model="lightTheme"
          density="compact"
          hide-details
        ></v-switch>

        <!-- START: Mobile Nav -->
        <div class="d-flex d-sm-none">
          <v-btn @click="$emit('toggle-drawer')" icon variant="text">
            <font-awesome-icon icon="fa-solid fa-bars"></font-awesome-icon>
          </v-btn>
        </div>
        <!-- END: Mobile Nav -->

        <!-- START: Desk Nav -->
        <div style="gap: 12px" class="d-none d-sm-flex align-center">
          <v-btn
            rounded="xl"
            variant="text"
            @click="$emit('nav-click', item)"
            v-for="item in navItems"
            >{{ item.label }}</v-btn
          >

          <v-btn color="black" variant="flat" @click="ctaClick"
            >Let's Talk</v-btn
          >
        </div>
        <!-- END: Desk Nav -->
      </div>
    </nav>
  </div>
</template>
<script>
import {
  getLocalLightModeSettings,
  setLocalLightModeSettings,
} from "@/utlities/utils";
import { useTheme } from "vuetify";
export default {
  data() {
    return {
      lightTheme: true,
      theme: useTheme(),
    };
  },
  props: {
    navItems: {
      type: Array,
      required: false,
    },
  },
  watch: {
    lightTheme(newVal) {
      this.setLightTheme(newVal);
    },
  },
  methods: {
    getLocalLightModeSettings,
    setLocalLightModeSettings,
    ctaClick() {
      this.$emit("cta-click");
    },
    navToSection(item) {
      this.$router.push({ path: "/#" + item.route });
    },
    setLightTheme(val) {
      this.setLocalLightModeSettings(val);
      this.theme.global.name = val == true ? "light" : "dark";
      this.lightTheme = val;

      this.updateThemeColor();
    },
    updateThemeColor() {
      const bgColor = this.$vuetify.theme.current.colors.background;
      const metaThemeColor = document.querySelector("meta[name=theme-color]");
      if (metaThemeColor) {
        metaThemeColor.setAttribute("content", bgColor);
      }
    },
  },
  created() {},
  mounted() {
    const localLightMode = this.getLocalLightModeSettings();
    this.setLightTheme(localLightMode);
  },
};
</script>
<style lang="scss" scoped>
// .nav {
//   position: sticky;
//   position: -webkit-sticky;
//   top: 0;
//   height: 72px;
//   z-index: 100;
//   border-bottom: 2px solid;
// }

// .glass-blur {
//   backdrop-filter: blur(10px);
//   // background-color: rgba(0, 0, 0, 0.4);
// }

// .nav-drawer {
//   // height: calc(100% - 72px);
//   border: 5px solid red;
// }
</style>
