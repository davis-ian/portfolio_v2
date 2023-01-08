<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="home-container">
    <h1 style="font-size: 5rem">COMING SOON</h1>
    <v-btn @click="openTab('https://www.iandavs.com')" theme="dark"
      >Click here for portfolio 1.0</v-btn
    >
  </div>
</template>
<script>
export default {
  methods: {
    openTab(url) {
      window.open(url, "_blank");
    },
  },
};
</script>
<style lang="scss">
.home-container {
  background-color: #f2f2f2;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
