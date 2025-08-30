<script setup lang="ts">
import { watch, onMounted } from "vue";
import { useConfig } from "@/stores/store";
import { useWindowSize, useWindowScroll } from "@vueuse/core";
import TheHeader from "@/components/header/TheHeader.vue";
import SlideMenu from "@/components/header/SlideMenu.vue";
import Welcome from "@/components/main/Welcome.vue";
import About from "@/components/main/About.vue";
import Projects from "@/components/main/Projects.vue";
import ContactForm from "@/components/main/ContactForm.vue";
import FooterComponent from "@/components/footer/Footer.vue";

const config = useConfig();
const { width } = useWindowSize();
const { y } = useWindowScroll();

const checkWidth = (width: number): void => {
  config.updateWidth(width);
};

watch(() => width.value, checkWidth);
watch(() => y.value, () => {
  config.menuIsOpen = false;
});

onMounted(() => {
  checkWidth(width.value);
  config.initCategories();
});
</script>

<template>
  <div id="container">
    <TheHeader />
    <main>
      <Welcome />
      <About />
      <Projects />
      <ContactForm />
    </main>
    <FooterComponent />
    <Transition>
      <SlideMenu v-if="config.menuIsOpen" />
    </Transition>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto Mono", monospace;
}

#app {
  min-height: 100vh;
  flex-direction: column;
  position: relative;
}

main {
  @include fdCol-aiCt;
  min-height: 1000px;
  width: 100%;
  & > span {
    margin-top: 200px;
    font-size: 50px;
    font-family: "Courier New", Courier, monospace;
    color: rgb(235, 235, 235);
  }
}
#container {
  position: relative;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 100vh;
}
</style>
