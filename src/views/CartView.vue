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
      <div v-for="movie in movies" class="movie-container">
        <div>
        <h1>{{ movie.title }}</h1>
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster}`" />
      </div>
      <h3>{{ movie.quantity }} currently in cart</h3>
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
.movie-container {
  display: flex;
  margin-left: 1rem;
}
h1 {
    display: block;
}
img {
  aspect-ratio: auto;
  width: 20vw;
  margin-bottom: 2rem;
}
</style>
