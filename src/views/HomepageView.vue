<script setup>
import Header from "../components/Header.vue";
import Hero from "../components/Hero.vue";
import Footer from "../components/Footer.vue";
import axios from "axios";
import { useStore } from "../pinia/index.js";

const store = useStore();
const movies = (
  await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${
      import.meta.env.VITE_TMDB_API_KEY
    }&language=en-US&adult=false`
  )
).data.results;

store.movies = movies.map((movie) => {
  return {
    id: movie.id,
    poster: movie.poster_path,
  };
});
</script>

<template>
  <div>
    <Header :info="{ site: 'Andy Movies', path: '/login', button: 'Login' }" />
    <Hero />
    <Footer />
  </div>
</template>

<style scoped>
div {
  background-color: #282a36;
}
</style>
