<script setup>
import { ref } from 'vue';
import axios from "axios";

const movie = ref("movie")

const getMovie = async () => {
  let data = (await axios.get(`https://api.themoviedb.org/3/movie/${movie.value}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&adult=false`)).data
  console.log(data)
}
</script>

<template>
  <header>
  </header>
  <div class="selector">
    <select v-model="movie" @change="getMovie">
      <option value="333952">Teletubbies: Musical Playtime</option>
        <option value="260984">Teletubbies: Dance with the Teletubbies</option>
        <option value="265794">Thomas and Friends: Santa's Little Engine</option>
        <option value="838424">Thomas and Friends 1945</option>
        <option value="221029">Thomas and Friends: King of the Railway</option>
        <option value="221029">Thomas and Friends: The Great Discovery</option>
        <option value="292821">Thomas and Friends: Tale of the Brave</option>
        <option value="305470">Power Rangers</option>
        <option value="9070">Mighty Morphin Power Rangers</option>
        <option value="447404">Pokémon Detective Pikachu</option>
    </select>
  </div>
  <div class="movie"></div>
</template>

<style scoped>
</style>
