<template>
  <div>
    <nav class="d-flex justify-space-between align-center pa-3 px-5">
      <h5 class="pointer text-uppercase" @click="handleLogoClick">Ian Davis</h5>

      <div class="d-flex" style="gap: 12px">
        <!-- <v-switch
          v-model="lightTheme"
          density="compact"
          hide-details
        ></v-switch> -->

        <theme-speed-dial
          @light-theme="(val) => (lightTheme = val)"
          class="theme-speed-dial"
        ></theme-speed-dial>

        <!-- START: Mobile Nav -->
        <div class="d-flex d-sm-none">
          <v-btn
            @click="$emit('toggle-drawer')"
            icon
            variant="text"
            aria-label="Nav Drawer Button"
          >
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
            :aria-label="`${item.label} Nav Button`"
            >{{ item.label }}</v-btn
          >

          <v-btn
            color="primary"
            variant="flat"
            class="button-shadow"
            @click="ctaClick"
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
import ThemeSpeedDial from "@/components/ui/ThemeSpeedDial.vue";
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
  components: {
    ThemeSpeedDial,
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
    handleLogoClick() {
      console.log(this.$router.currentRoute.value.name, "router");

      if (this.$router.currentRoute.value.name === "Home") {
        this.$emit("nav-click", this.navItems[0]);
      } else {
        $router.push("/");
      }
    },
  },
  mounted() {
    const localLightMode = this.getLocalLightModeSettings();

    if (localLightMode == null) {
      this.setLightTheme(true);
    } else {
      this.setLightTheme(localLightMode);
    }
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
