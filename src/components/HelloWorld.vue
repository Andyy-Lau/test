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
  <div class="body">
    <header>
      <div>
        <h1>TMDB Website</h1>
      </div>
    </header>
    <div class="selector">
      <label for="options">Select Movie</label>
      <select v-model="selection" id="options">
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
      <button @click="getMovie" id="get">Get</button>
    </div>
    <div v-if="movie" class="movieContainer">
      <div class="title">
        <h1>{{ movie.title }}</h1>
        <h2>{{ movie.tagline }}</h2>
      </div>
      <img :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" />
      <div class="description">
        <h2>{{ movie.overview }}</h2>
        <h2>The movie was released in {{ movie.release_date }}</h2>
        <h2>Movie popularity: {{ movie.popularity }}</h2>
        <h2>The budget for this movie was {{ movie.budget }}</h2>
        <h2>The movie runtime is {{ movie.runtime }} minutes</h2>
        <h2>({{ movie.original_language }}) is the original language of {{ movie.title }}</h2>
      </div>
      <button @click="getTrailer(movie.id)">trailer</button>
    </div>
  </div>
</template>

<style scoped>
  .body {
    background-color: #282a36;
    width: 100vw;
    min-height: 100vh;
  }

  h1 {
    margin: 0;
  }

  header {
    padding: 18px;
    font-size: 34px;
    margin-bottom: 2em;
  }

  header div {
    background-color: #000;
    opacity: 0.5;
    border-radius: 10px;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .selector {
    margin-left: 1%;
    text-align: center;
  }

  #options {
    font-size: 28px;
    padding: 12px 28px;
    text-align: center;
    border-radius: 10px;
  }

  label {
    font-size: 32px;
    padding-right: 8px;
  }

  #get {
    height: 58px;
    width: 140px;
    margin-left: 8px;
    font-size: 28px;
    border-radius: 10px;
    border: none;
  }

  .movieContainer {
    display: block;
    justify-content: center;
    text-align: center;
  }

  .title {
    text-align: center;
    padding: 4%;
    width: auto;
    display: block;
  }

  .title h1 {
    font-size: 56px;
  }

  .title h2 {
    font-size: 36px;
  }

  .description {
    width: auto;
    padding: 4%;
  }

  .description h2 {
    font-size: 1.5em;
  }

  .movieContainer button {
    display: block;
    margin: auto;
    height: 40px;
    width: 120px;
    font-size: 24px;
    border-radius: 10px;
    border: none;
  }

  h2 {
    font-size: 36px;
  }

  .description > * + * {
    margin-top: 12px;
  }

  img {
    display: block;
    width: 35vw;
    height: auto;
    margin-right: auto;
    margin-left: auto;
  }

  .movieContainer button {
    display: block;
    border-radius: 12px;
    border: none;
    width: 150px;
    height: 48px;
    font-size: 26px;
    margin-right: auto;
    margin-left: auto;
  }
</style>
