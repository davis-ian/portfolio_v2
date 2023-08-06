<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="hero">
    <div>
      <div class="title-wrap">
        <h1 class="title">Ian</h1>
        <h1 class="title">Davis</h1>
      </div>
      <p class="content">Full-Stack Developer</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;

  .title-wrap {
    display: flex;
    gap: 35px;
  }
  .title {
    text-transform: uppercase;
    // font-weight: 400;
    font-size: 8rem;
    line-height: 7.5rem;
  }
  .content {
    font-size: 1.4rem;
    font-weight: 500;
    text-transform: uppercase;
  }
}

/* Media query for mobile devices */
@media (max-width: 768px) {
  /* CSS for mobile styles */
  .hero {
    .title-wrap {
      display: flex;
      flex-direction: column;
      gap: 0;
    }

    .title {
      text-transform: uppercase;
      // font-weight: 400;
      font-size: 5rem;
      line-height: 4.5rem;
    }
    .content {
      font-size: 1.2rem;
      font-weight: 500;
      text-transform: uppercase;
    }
  }
}

.company-name {
  // color: orange;
}
</style>
