const TMDB_API_KEY = "7d343ae967a862c86915cc4c15444dcb"

const getTMDBData = async (url) => {
    return (await axios.get(url).data);
}

let movieData = await getTMDBData(`https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`);
console.log(movieData);