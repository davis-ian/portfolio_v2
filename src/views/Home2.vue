<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="home-container">
    <h1 style="font-size: 5rem">Vue 3 starter</h1>
    <v-btn
      style="color: white"
      @click="openTab('https://www.iandavs.com')"
      theme="dark"
      >Click here for portfolio 1.0</v-btn
    >

    <!-- <v-btn @click="testSnack">test snack</v-btn> -->
  </div>
</template>
<script>
import { useSnackbarStore } from "@/store/snackbar";
export default {
  setup() {
    const snackbar = useSnackbarStore();
    return { snackbar };
  },
  methods: {
    openTab(url) {
      window.open(url, "_blank");
    },
    // testSnack() {
    //   console.log("testing snack");
    //   this.snackbar.showSnackbar({ message: "Message sent!" });
    // },
  },
};
</script>
<style lang="scss">
.home-container {
  background-color: #f2f2f2;
  height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
