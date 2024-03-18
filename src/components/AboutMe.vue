<template>
  <div>
    <h4 class="text-lowercase">About</h4>
    <p class="my-3">
      I'm a full-stack developer. I build clean and modern websites with a focus
      on UX and performance. I'm currently working with the incredible team @
      <strong>MemoryShare</strong>.
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    console.log(this.$vuetify.theme.current.colors.primary, "primary");
  },
};
</script>
<style lang="scss">
.about {
}
</style>
