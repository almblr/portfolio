<template>
  <section>
    <p>{{ $t("welcome.title") }}</p>
    <h1>MEHDI BIRLAKHDAR</h1>
    <p class="presentation">
      {{ $t("welcome.introduction") }}
    </p>
    <GetInTouch :text="$t('welcome.button')" @click="scrollTo" />
  </section>
</template>

<script setup lang="ts">
import GetInTouch from "@/components/main/GetInTouch.vue";
import { useConfig } from "@/stores/store";

const config = useConfig();
const scrollTo = (el: string): void => {
  config.categories.c3?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
</script>

<style scoped lang="scss">
section {
  @include fdCol;
  width: 100%;
  padding: 120px 5% 10% 30px;
  background: linear-gradient(
    90deg,
    rgb(211, 171, 183) 0%,
    rgba(197, 194, 247, 1) 50%,
    rgba(122, 140, 231, 1) 100%
  );
  color: #212529;
  & p {
    font-size: 1.1rem;
    line-height: 1.5rem;
    margin-bottom: 1rem;
  }
  & h1 {
    font-size: 3.5rem;
    line-height: 3.5rem;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
  }
  & .presentation {
    margin-bottom: 30px;
  }
}

@media screen and (min-width: 768px) {
  section {
    padding-right: 5%;
  }
}

@media screen and (min-width: 1000px) {
  section {
    padding-left: 20%;
    padding-right: 15%;
    padding-bottom: 5%;
  }
}
</style>
