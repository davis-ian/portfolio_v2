<template>
  <v-app>
    <v-main>
      <v-app-bar app>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <!-- <v-app-bar-title>Ian</v-app-bar-title> -->
      </v-app-bar>
      <router-view />
      <snackbar />
    </v-main>
  </v-app>
</template>

<script>
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
    };
  },
  components: { Snackbar },
};
</script>
