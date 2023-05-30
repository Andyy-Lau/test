<script setup>
import axios from "axios";
import { useStore } from "../pinia/index.js";

const store = useStore();
const props = defineProps(["id"]);

const movie = (
  await axios.get(
    `https://api.themoviedb.org/3/movie/${props.id}?api_key=${
      import.meta.env.VITE_TMDB_API_KEY
    }&language=en-US&adult=false`
  )
).data;

console.log(movie.poster_path);
</script>

<template>
  <Teleport to="body">
    <div class="modal-outer-container" @click.self="$emit('toggleModal')">
      <div class="modal-inner-container">
        <div v-if="movie" class="info-container">
          <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" />
          <div class="text-container">
            <h1>{{ movie.title }}</h1>
            <h2>{{ movie.release_date }}</h2>
            <h3 @click="store.addToCart(movie.poster_path, movie.title)">Buy</h3>
          </div>
        </div>
        <button @click="$emit('toggleModal')">X</button>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-outer-container {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #00000099;
  z-index: 5;
}
.modal-inner-container {
  height: 50vh;
  background-color: #212529;
  width: clamp(280px, 100%, 900px);
  display: flex;
}
.info-container {
  display: flex;
  width: 60vw;
}
.text-container {
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  text-align: center;
}
h1 {
  grid-row-start: 3;
  width: 30vw;
}
h2 {
  grid-row-start: 4;
}
h3 {
  background-color: aliceblue;
  grid-row-start: 5;
  width: 6rem;
  height: 2rem;
  text-align: center;
  justify-self: center;
  border-radius: 8px;
}
button {
  width: 1.5rem;
  height: 1.5rem;
  text-align: center;
}
h3:hover {
  cursor: pointer;
}
h3:active {
  background-color: rgb(151, 158, 163);

}
</style>
