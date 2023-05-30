<script setup>
import { useStore } from "../pinia/index.js";
import { ref } from "vue";
import Header from "../components/Header.vue";

const store = useStore();
const movies = ref(false);

console.log(store.cart);
movies.value = store.cart;
</script>

<template>
  <body>
    <Header :info="{ site: 'Cart', path: 'purchase', button: 'Back' }" />
    <div v-if="movies">
      <div v-for="movie in movies">
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster}`" />
        <h1>{{ movie.title }}</h1>
      </div>
    </div>
  </body>
</template>

<style scoped>
body {
  min-height: 100vh;
  background-color: #282a36;
  width: 100vw;
}
</style>
