<script setup lang="ts">
import { ref, computed } from "vue";
import { useConfig } from "@/stores/store";
import { useI18n } from "vue-i18n";
import useNavigation from "@/composables/useNavigation";
const { t } = useI18n();

const config = useConfig();
const nav = ref<HTMLElement | null>(null);
const isMenuOpen = computed(() => config.menuIsOpen);
const { scrollToCategory } = useNavigation();

const categories = computed(() => {
  return Object.keys(config.categories).map((key) => ({
    key,
    label: t(`categories.${key}`),
  }));
});
</script>

<template>
  <nav :class="isMenuOpen ? 'nav--slider' : 'nav--header'">
    <a @click="scrollToCategory(category.key)" v-for="category in categories">
      {{ category.label }}
    </a>
  </nav>
</template>

<style scoped lang="scss">
.nav--header {
  @include jcCt-aiCt;
  width: max-content;
  gap: 30px;
  a {
    @include jcCt-aiCt;
    position: relative;
    flex-wrap: nowrap;
    transition: all 0.3s ease 0s;
    cursor: pointer;
    &:hover {
      color: white;
    }
    &::before {
      content: "";
      width: 110%;
      position: absolute;
      bottom: -5px;
      height: 0;
      z-index: 1;
      background: linear-gradient(90deg, rgb(106, 167, 207), rgb(57, 104, 165));
      transition: all 0.3s ease 0s;
      z-index: -1;
    }
    &:hover::before {
      height: 30px;
    }
  }
}
.nav--slider {
  @include fdCol;
  position: fixed;
  width: 100%;
  height: 100%;
  padding: 20px 20px 0;
  margin-top: 80px;
  background-color: #ffffff;
  gap: 50px;
}

a {
  @include jcCt-aiCt;
  position: relative;
  flex-wrap: nowrap;
  cursor: pointer;
}
</style>
