<script setup>
import { ref } from "vue";
import axios from "axios";


const selection = ref("movie")
const movie = ref(false)

const getMovie = async() => {
  movie.value = (
    await axios.get(
      `https://api.themoviedb.org/3/movie/${selection.value}?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&language=en-US&adult=false`
    )
  ).data
  console.log(movie.id)
}

const getTrailer = async(id) => {
  console.log("abc")
  console.log(id)
  const trailersData = (await axios.get(
    `https://api.themoviedb.org/3//movie/${id}/videos?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&adult=false`
  )).data
  console.log(trailersData)
  const trailer = trailersData.results.filter((trailer) => {
    return trailer.type === "Trailer";
  })

  !trailer.length
    ? alert("Sorry! No trailers for this film.")
    : window.open(`https://www.youtube.com/watch?v=${trailer.at(0).key}`);
}

</script>

<template>
  <header></header>
  <div class="selector">
    <select v-model="selection">
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
    <button @click="getMovie"></button>
  </div>
  <div v-if="movie" class="movieContainer">
    <h1>{{ movie.title }}</h1>
    <img :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" />
    <h2>{{ movie.overview }}</h2>
    <h3>{{ movie.release_date }}</h3>
    <h3>{{ movie.popularity }}</h3>
    <h3>the budget for this movie was {{ movie.budget }}</h3>
    <h3>The movie runtime is {{ movie.runtime }}</h3>
    <h3>{{ movie.original_language }}</h3>
    <button @click="getTrailer(movie.id)">trailer</button>
    <!--trailer -->
  </div>
</template>

<style scoped></style>
