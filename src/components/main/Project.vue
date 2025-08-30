<script setup lang="ts">
import BigButton from "@/components/main/BigButton.vue";
import { useProjects } from "@/composables/useProjects";

const { projects } = useProjects();

const openNewTab = (link: string): void => {
  window.open(link, "_blank");
};
</script>

<template>
  <section
    v-for="project in projects"
    :key="project.key"
    :style="{ backgroundColor: project.color }"
  >
    <article>
      <div class="text">
        <h2 class="project__title">{{ project.name }}</h2>
        <p class="project__descp">{{ project.description }}</p>
        <ul class="project__techno">
          <li v-for="techno in project.technos" :key="techno">{{ techno }}</li>
        </ul>
        <div class="button">
          <BigButton
            v-for="action in project.actions"
            :key="action.type"
            @click="openNewTab(action.link)"
            :text="$t(action.labelKey)"
            type="repo"
          />
        </div>
      </div>
      <img :src="project.image" alt="project image" />
    </article>
  </section>
</template>
<style scoped lang="scss">
section {
  @include jcCt-aiCt;
  width: 100%;
  min-height: 650px;
  max-height: 750px;
  padding: 3% 2%;
}
article {
  @include fdCol-aiCt;
  position: relative;
  width: 1400px;
  height: 100%;
  gap: 50px;
  padding: 0 2%;
  text-align: center;
  & > .text {
    @include fdCol-aiCt;
    width: 100%;
    flex-wrap: wrap;
    color: white;
    gap: 10px;
    & h2 {
      font-size: 3rem;
      margin-bottom: 20px;
    }
    & ul {
      @include jcCt;
      flex-wrap: wrap;
      margin-top: 20px;
      list-style-type: none;
      gap: 20px;
      li {
        @include jcCt;
        width: max-content;
        width: 100px;
        color: rgb(32, 32, 32);
        background: linear-gradient(
          90deg,
          rgb(240, 220, 226) 0%,
          rgb(112, 131, 230) 100%
        );
        padding: 10px 20px;
        border-radius: 5px;
        font-size: 0.8rem;
        transition: 300ms;
        font-weight: 700;
      }
    }
  }
  & > img {
    @include jcCt;
    width: 100%;
    max-width: 700px;
    width: 100%;
  }
  .button {
    @include jcCt;
    flex-wrap: wrap;
    gap: 20px;
    max-width: 100%;
    margin-top: 25px;
    align-self: center;
  }
}

@media screen and (min-width: 1180px) {
  article {
    display: flex;
    flex-direction: row;
    & .text {
      display: flex;
      width: 50%;
      min-width: 350px;
      & h2 {
        font-size: 3rem;
      }
    }
    & img {
      flex: 1;
      margin: 0;
      object-fit: contain;
    }
  }
}
</style>
