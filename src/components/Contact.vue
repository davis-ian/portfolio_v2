<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h2 class="contact-title">Interested in working together?</h2>
    <p>Shoot me a line!</p>
    <v-text-field variant="outlined" label="Name" />
    <v-text-field variant="outlined" label="Email" />
    <v-textarea variant="outlined" label="Message" />
    <v-btn class="btn-shadow" variant="outlined" color="black" block
      >Send</v-btn
    >
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
// .contact-title {
//   font-family: "MigraBold";
// }
</style>
