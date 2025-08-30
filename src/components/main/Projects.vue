<script setup lang="ts">
import Project from "@/components/main/Project.vue";
</script>

<template>
  <section id="projects">
    <h3>{{ $t("categories.projects") }}</h3>
    <Project />
  </section>
</template>

<style scoped lang="scss">
section {
  @include fdCol-aiCt;
  padding-top: 80px;
  width: 100%;
  & > h3 {
    max-width: 1300px;
    width: 100%;
    font-size: 3rem;
    margin-bottom: 1rem;
    color: rgb(37, 45, 87);
    padding-left: 40px;
  }
}
</style>
