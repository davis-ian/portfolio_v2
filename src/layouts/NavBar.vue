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
export default {
  data() {
    return {
      lightTheme: true,
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
      console.log(newVal, "dark theme");
      this.$emit("set-light-theme", newVal);
    },
  },
  methods: {
    ctaClick() {
      this.$emit("cta-click");
    },
    navToSection(item) {
      console.log(item.route, "ropute");
      this.$router.push({ path: "/#" + item.route });
    },
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
