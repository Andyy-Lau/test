<script setup>
    import { ref } from "vue"
    import axios from "axios"
    import { useStore } from "../pinia/index.js"

    const store = useStore();
    const showModal = ref(false)
    let movieInfo = ref(false)

    const getMovie = async() => {
        const movieResults = (await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&adult=false`)).data.results
        console.log(movieResults)
        movieResults.map(movie => {
            let result = {
                id: movie.id,
                poster: movie.poster_path,
            }
            store.movies.push(result)
         })
         return store.movies
    }
    movieInfo = getMovie()
    console.log(movieInfo)

    const modalClick = () => {
        showModal = !showModal
    }
</script>

<template>
    <body>
        <header>
            <h1>Andy Movies</h1>
            <nav>
                <RouterLink to="/cart" custom v-slot="{ navigate }">
                    <button @click="navigate">Cart</button>
                </RouterLink>
                <button @click="modalClick">Show Modal</button>
            </nav>
        </header>
        <Transition>
            <modal v-if="showModal" @close="showModal">
                <h2>Modal open</h2>
            </modal>
        </Transition>
        <div v-if="movieInfo" class="contentContainer">
            <div v-for="movie in movieInfo" class="movieContainer">
                <img :src="`https://image.tmdb.org/t/p/w500${movie.poster}`"/>
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
header {
    height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #191f4f;
  border-radius: 12px;
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