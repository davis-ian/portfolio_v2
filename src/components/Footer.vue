<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class=" pa-4">
    <div class="d-flex justify-center align-center">
      <span class="mr-4">Email</span>
      <span>GitHub</span>
    </div>
    <!-- <div class="logo-wrap">
      <img class=logo :src="githubLogo" alt="GitHubLogo">
    </div> -->
  </div>
</template>
<script>
import githubLogo from '@/assets/images/github.svg'
export default {
  data() {
    return {
      githubLogo
    }
  }
};
</script>
<style lang="scss" scoped>
// .footer {
//     border: 2px solid red;
// }
.logo-wrap {
  width: 2em;
  height: 2em;

  .logo {
    width: 100%
  }
}
</style>
