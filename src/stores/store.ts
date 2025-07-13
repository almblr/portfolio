import { ref } from "vue";
import { defineStore } from "pinia";

export const useConfig = defineStore("variable", () => {
  const isDesktop = ref(true);
  const menuIsOpen = ref(false);
  const language = ref("EN");
  const categories = {
    c1: ref<HTMLElement | null>(null),
    c2: ref<HTMLElement | null>(null),
    c3: ref<HTMLElement | null>(null),
  };

  return { isDesktop, menuIsOpen, language, categories };
});
