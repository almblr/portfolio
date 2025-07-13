<template>
  <section id="about">
    <h2>{{ $t("about.title") }}</h2>
    <p v-for="paragraphe in paragraphes">{{ paragraphe }}</p>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useConfig } from "@/stores/store";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const config = useConfig();
const paragraphes = computed(() => {
  const result = [];
  for (let i = 1; i <= 5; i++) {
    result.push(t(`about.introduction.p${i}`));
  }
  return result;
});

onMounted(() => {
  config.categories.c1 = document.querySelector("#about");
});
</script>

<style scoped lang="scss">
section {
  @include fdCol;
  max-width: 1000px;
  gap: 20px;
  padding: 0 40px;
  padding-top: 80px; // utile pour le scrollIntoView
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
</style>
