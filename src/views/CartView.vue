<script setup>
import { useStore } from "../pinia/index.js";
import { ref } from "vue";
import Header from "../components/Header.vue";
import router from "../router/index.js"

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
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster}`" />
        <div class="text-container">
          <div>
            <h1>{{ movie.title }}</h1>
            <h2>{{ movie.release }}</h2>
            <h4>{{ movie.overview }}</h4>
          </div>
          <h3>{{ movie.quantity }} currently in cart</h3>
        </div>
      </div>
      <button @click="router.push('/checkout')">Continue to checkout</button>
    </div>
    <div v-else >
      <h2>You have nothing in your cart.</h2>
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
  margin-right: 1rem;
}
.text-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
h1 {
  display: block;
}
img {
  aspect-ratio: auto;
  width: 10vw;
  margin-bottom: 2rem;
  margin-right: 1rem;
}
h3 {
  align-self: flex-end;
}
button {
  padding: 6px 24px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
}
</style>
