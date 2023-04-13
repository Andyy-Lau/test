import { TMDB_API_KEY } from "./key.js";

const movies = document.getElementById("movies");
const getTMDBData = async (url) => {
  return (await axios.get(url)).data;
};

const createMovieContainer = (title, popularity, overview, backdrop, poster) => {
    const container = document.createElement("div");
    const text = document.createElement("div");
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const movieBackdrop = document.createElement("img");
    const movieImg = document.createElement("img");
    const trailerButton = document.createElement("button");

    container.classList.add("container");
    movieImg.src = `https://image.tmdb.org/t/p/original/${poster}`;
    movieBackdrop.src = `${backdrop}`;
    h1.innerText = title;
    h2.innerText = overview;
    h3.innerText = popularity;
    trailerButton.innerText = "Get";

    text.append(h1);
    text.append(h2);
    text.append(h3);

    container.append(movieImg);
    container.append(text);
    container.append(movieBackdrop);
    container.append(trailerButton);
}


async function getMovie(id) {
  let movie = await getTMDBData(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}&language=en-US&adult=false`
  );
  createMovieContainer(movie.title, movie.popularity, movie.overview, movie.backdrop_path, movie.poster_path)
}

function clearMovie() {
  let isEmpty = document.getElementById("movies").innerHTML === "";
  if (isEmpty) {
    return
  } else {
    document.getElementById("movies").innerHTML = "";
  }
}

document.getElementById("get").addEventListener("click", (e) => {
  clearMovie()
  let id = document.getElementById("options").value;
  getMovie(id);
});

