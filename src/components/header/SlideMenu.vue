<template>
  <HeaderNav v-if="config.menuIsOpen" />
</template>

<script setup lang="ts">
import { useConfig } from "@/stores/store";
import HeaderNav from "@/components/header/HeaderNav.vue";
const config = useConfig();
</script>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(100%);
}
</style>
