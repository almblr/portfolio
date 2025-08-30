<script setup lang="ts">
</script>

<template>
  <section id="about">
    <h2>{{ $t("about.title") }}</h2>
    <p class="whitespace-pre-line">{{ $t("about.introduction") }}</p>
  </section>
</template>

<style scoped lang="scss">
section {
  @include fdCol;
  max-width: 1000px;
  gap: 20px;
  padding: 0 40px;
  padding-top: 80px; // useful for scrollIntoView
  h2 {
    font-size: 45px;
    font-weight: 800;
    color: rgb(90, 102, 170);
  }
  p {
    font-size: 14px;
    line-height: 2rem;
  }
}

.whitespace-pre-line {
  white-space: pre-line;
}
</style>
