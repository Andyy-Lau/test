<script setup>
import { ref } from "vue";
import axios from "axios";
import { useStore } from "../pinia/index.js";
import router from "../router/index.js";
import Modal from "../components/Modal.vue"

const store = useStore();
const showModal = ref(false);
const selectedMovieId = ref(0);

const toggleModal = (id) => {
  showModal.value = !showModal.value;
  selectedMovieId.value = id;
  console.log("modal");
};
</script>

<template>
  <body>
    <header>
      <h1>Andy Movies</h1>
      <nav>
        <button @click="router.push('/cart')">Cart</button>
      </nav>
    </header>
    <div v-if="store.movies" class="contentContainer">
      <div v-for="movie in store.movies" class="movieContainer">
        <img
          :src="`https://image.tmdb.org/t/p/w500${movie.poster}`"
          @click="toggleModal(movie.id)"
        />
      </div>
    </div>
    <Modal v-if="showModal" :id="selectedMovieId" @toggleModal="toggleModal()" />
  </body>
</template>

<style scoped>
body {
  min-height: 100vh;
  background-color: #282a36;
  width: 100vw;
}
header {
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #191f4f;
  border-radius: 12px;
}
nav {
  display: flex;
  width: 30vw;
  justify-content: space-evenly;
}
h1 {
  padding-left: 1rem;
}
button {
  padding: 6px 24px;
  font-size: 20px;
  border-radius: 8px;
  border: none;
}
.contentContainer {
  display: flex;
  flex-wrap: wrap;
  gap: 6.25vw;
}
.movieContainer img {
  width: 15vw;
}
</style>
