import { TMDB_API_KEY } from "./key.js";

const getTMDBData = async (url) => {
  return (await axios.get(url)).data;
};

let movieData = await getTMDBData(
  `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&adult=false`
);
console.log(movieData);

movieData.results.forEach((movie) => {
  console.log(`movie title: ${movie.title}, \n\npopularity: ${movie.popularity}, \n\noverview: ${movie.overview}, \n\nid: ${movie.id}`);
});
