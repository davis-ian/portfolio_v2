<template>
  <div>
    <div class="d-flex">
      <div>
        <v-btn variant="flat" id="theme-fab" icon>
          <font-awesome-icon icon="fa-solid fa-brush"></font-awesome-icon>
        </v-btn>
        <v-speed-dial
          scroll-strategy="close"
          attach="#theme-fab"
          activator="parent"
          location="top center"
          transition="slide-y-transition"
        >
          <v-btn
            style="border: 2px solid"
            v-if="!this.$vuetify.theme.current.dark && !updatingTheme"
            color="white"
            key="1"
            icon
            @click="updateLightTheme(false)"
          >
            <v-avatar
              size="30"
              style="border: 2px solid black"
              :color="$vuetify.theme.themes.dark.colors.background"
            ></v-avatar>
          </v-btn>
          <v-btn
            style="border: 2px solid"
            v-if="this.$vuetify.theme.current.dark && !updatingTheme"
            color="white"
            @click="updateLightTheme(true)"
            key="2"
            icon
          >
            <v-avatar
              size="30"
              style="border: 2px solid black"
              :color="$vuetify.theme.themes.light.colors.background"
            ></v-avatar>
          </v-btn>
        </v-speed-dial>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      updatingTheme: false,
    };
  },
  methods: {
    updateLightTheme(val) {
      this.$emit("light-theme", val);
      this.updatingTheme = true;

      setTimeout(() => {
        this.updatingTheme = false;
      }, 250);
    },
  },
};
</script>
<style lang=""></style>
