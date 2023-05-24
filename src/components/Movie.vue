<script setup>
    import { ref } from "vue"
    import axios from "axios"

    let movieIds = []

    const getMovie = async() => {
        const movieResults = (await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&adult=false`)).data.results
        movieResults.map(movie => {
            movieIds.push(movie.id)
        })
        return movieResults
    }
    console.log(getMovie())
    console.log(movieIds)
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
        <div>
            
        </div>
    </body>
</template>

<style scoped></style>