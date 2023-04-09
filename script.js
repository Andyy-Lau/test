import { TMDB_API_KEY } from "./key.js";

const getTMDBData = async (url) => {
  return (await axios.get(url)).data;
};

const createMovieContainer = (title, popularity, overview, backdrop, poster) => {
    const container = document.createElement("div");
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const movieBackdrop = document.createElement("img");
    const movieImg = document.createElement("img");
    const getButton = document.createElement("button");

    container.classList.add("container");
    movieImg.src = `https://image.tmdb.org/t/p/w500/${poster}`;
    movieBackdrop.src = `${backdrop}`;
    h1.innerText = title;
    h2.innerText = overview;
    h3.innerText = popularity;
    getButton.innerText = "Get";
}

let movieData = await getTMDBData(
  `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&adult=false`
);
console.log(movieData);

movieData.results.forEach((movie) => {
  console.log(
    `movie title: ${movie.title}, \n\npopularity: ${movie.popularity}, \n\noverview: ${movie.overview}, \n\nid: ${movie.id}`
  );
  createMovieContainer(movie.title, movie.popularity, movie.overview, movie.backdrop_path, movie.poster_path)
});
