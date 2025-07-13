<template>
  <section id="myWorks">
    <h3>{{ $t("categories.c2") }}</h3>
    <Project />
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useConfig } from "@/stores/store";
import Project from "@/components/main/Project.vue";

const config = useConfig();

onMounted(() => {
  config.categories.c2 = document.querySelector("#myWorks");
});
</script>

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
