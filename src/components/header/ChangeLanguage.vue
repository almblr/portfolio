<script setup lang="ts">
import { computed } from "vue";
import { useConfig } from "@/stores/store";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
const config = useConfig();

const langue = computed(() => {
  return locale.value === "en" ? "FR" : "EN";
});

const changeLanguage = (): void => {
  locale.value === "en" ? (locale.value = "fr") : (locale.value = "en");
  config.language = locale.value.toUpperCase();
};
</script>

<template>
  <div>
    <button @click="changeLanguage">
      {{ langue }}
    </button>
    <div class="divider"></div>
  </div>
</template>

<style scoped lang="scss">
div {
  @include jcCt-aiCt;
  height: 100%;
}

button {
  font-size: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.divider {
  width: 1px;
  height: 30px;
  background-color: #212529;
  margin: 0 10px;
}
</style>
