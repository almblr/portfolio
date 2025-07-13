<template>
  <footer>
    <p>
      Made with ❤️ | Inspired by
      <a href="https://chaseohlson.com/" target="_blank" class="portfolio"
        >Chase Ohlson</a
      >
    </p>
    <div class="socialMedia">
      <a href="https://github.com/almblr" target="_blank"> Github -</a>
      <a href="https://www.linkedin.com/in/mehdibirlakhdar/" target="_blank">LinkedIn</a>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
footer {
  @include fdCol-jcCt-aiCt;
  gap: 15px;
  width: 100%;
  height: 140px;
  background-color: #15141a;
  color: white;
  a {
    text-decoration: none;
    cursor: pointer;
  }
  .portfolio {
    color: white;
    font-weight: bold;
  }
  .socialMedia a {
    color: rgb(228, 84, 84);
  }
}
</style>
