<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  text: String,
  type: String,
});

const buttonStyle = computed(() => {
  return {
    repo: props.type === "repo",
    demo: props.type === "demo",
  };
})
</script>

<template>
  <button ref="button" :class="buttonStyle">
    <span> {{ text }}</span>
  </button>
</template>

<style scoped lang="scss">
button {
  width: 200px;
  height: 50px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: transparent;
  border: 1px solid #212529;
  transition: 300ms;
  cursor: pointer;
  &:hover {
    background-color: #a0819d71;
  }
}

.repo {
  border-color: white;
  color: white;
  &:hover {
    background-color: #3c3d3d54;
  }
}

@media screen and (min-width: 768px) {
  button {
    width: 200px;
  }
}
</style>
