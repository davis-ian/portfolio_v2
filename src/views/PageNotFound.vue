<template>
  <div class="page-not-found-view fill-height">
    <h1>404</h1>
    <h5>Page Not Found</h5>
    <v-btn
      @click="this.$router.push({ path: '/' })"
      class="mt-6"
      variant="flat"
      color="black"
      >Home Page</v-btn
    >
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.page-not-found-view {
  min-height: calc(100svh - 72px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
