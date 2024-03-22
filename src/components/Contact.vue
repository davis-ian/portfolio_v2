<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h3 class="text-lowercase">Let's Connect</h3>
    <p class="my-3">I'm always interested in</p>
    <div style="gap: 8px" class="d-flex flex-row flex-wrap">
      <v-chip label variant="outlined">Full Stack Development</v-chip>
      <v-chip label variant="outlined">UX/UI Design</v-chip>
      <v-chip label variant="outlined">Startups</v-chip>
      <v-chip label variant="outlined">Pizza</v-chip>
    </div>

    <div class="mt-3">
      <v-btn
        @click="openEmail"
        size="large"
        variant="flat"
        color="primary"
        class="button-shadow"
        >Contact Me</v-btn
      >
    </div>
  </div>
</template>
<script>
import { openEmail } from "@/utlities/utils";
export default {
  methods: {
    openEmail,
  },
};
</script>
<style lang="scss" scoped>
.intrest-chip {
  border: 2px solid;
  padding: 4px;
}
</style>
