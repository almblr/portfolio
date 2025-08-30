import { ref } from "vue";
import { defineStore } from "pinia";

export const useConfig = defineStore("variable", () => {
  const isDesktop = ref(true);
  const menuIsOpen = ref(false);
  const language = ref("EN");
  const categories = {
    about: ref<HTMLElement | null>(null),
    projects: ref<HTMLElement | null>(null),
    contact: ref<HTMLElement | null>(null),
  };

  const updateWidth = (width: number): void => {
    const mobileWidth = 768;
    isDesktop.value = width > mobileWidth;
    menuIsOpen.value = false;
  };

  const initCategories = (): void => {
    categories.about.value = document.querySelector("#about");
    categories.projects.value = document.querySelector("#projects");
    categories.contact.value = document.querySelector("#contact");
  };
  
  return { isDesktop, menuIsOpen, language, categories, updateWidth, initCategories };
});
