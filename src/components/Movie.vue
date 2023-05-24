<script setup>
    import { ref } from "vue"

    const getMovie = async(id) => {
        await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&adult=false`)
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
            </nav>
        </header>
        <div>
            
        </div>
    </body>
</template>

<style scoped></style>