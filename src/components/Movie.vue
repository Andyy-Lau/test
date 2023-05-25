<script setup>
    import { ref } from "vue"
    import axios from "axios"

    const movieInfo = ref(false)
    movieInfo.value = []

    const getMovie = async() => {
        const movieResults = (await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&adult=false`)).data.results
        movieResults.map(movie => {
            let result = {
                id: movie.id,
                poster: movie.poster_path,
            }
            movieInfo.value.push(result)
         })
        // return movieResults
    }
    // console.log(getMovie())
    getMovie()
    console.log(movieInfo.value )
</script>

<template>
    <body>
        <header>
            <h1>Andy Movies</h1>
            <nav>
                <RouterLink to="/cart" custom v-slot="{ navigate }">
                    <button @click="navigate">Cart</button>
                </RouterLink>
            </nav>
        </header>
        <div v-if="movieInfo">
            <div v-for="movie in movieInfo.value">
                <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"/>
            </div>
        </div>
    </body>
</template>

<style scoped></style>