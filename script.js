import { TMDB_API_KEY } from "./key.js";

const movies = document.getElementById("movies");
const getTMDBData = async (url) => {
  return (await axios.get(url)).data;
};

const createMovieContainer = (id, title, popularity, overview, poster) => {
  const container = document.createElement("div");
  const text = document.createElement("div");
  const movieTitle = document.createElement("h1");
  const movieOverview = document.createElement("h2");
  const moviePopularity = document.createElement("h3");
  const movieImg = document.createElement("img");
  const trailerButton = document.createElement("button");

  container.classList.add("container");
  text.classList.add("description");
  movieImg.src = `https://image.tmdb.org/t/p/original/${poster}`;
  movieTitle.innerText = title;
  movieOverview.innerText = overview;
  moviePopularity.innerText = popularity;
  trailerButton.innerText = "Trailer";

  trailerButton.addEventListener("click", async () => {
    const trailersData = await getTMDBData(
      `https://api.themoviedb.org/3//movie/${id}/videos?api_key=${TMDB_API_KEY}&language=en-US&adult=false`
    );

    console.log(trailersData);

    const trailer = trailersData.results.filter((trailer) => {
      return trailer.type === "Trailer";
    });

    !trailer.length
      ? alert("Sorry! No trailers for this film.")
      : window.open(`https://www.youtube.com/watch?v=${trailer.at(0).key}`);
  });

  text.append(movieTitle);
  text.append(movieOverview);
  text.append(moviePopularity);

  container.append(movieImg);
  container.append(text);
  container.append(trailerButton);

  return container;
};

async function getMovie(id) {
  let movie = await getTMDBData(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}&language=en-US&adult=false`
  );
  console.log(movie);
  console.log(movie.id);
  console.log(movie.title);
  const container = createMovieContainer(
    movie.id,
    movie.title,
    movie.popularity,
    movie.overview,
    movie.poster_path
  );
  movies.appendChild(container);
}

function clearMovie() {
  let isEmpty = document.getElementById("movies").innerHTML === "";
  if (isEmpty) {
    return;
  } else {
    document.getElementById("movies").innerHTML = "";
  }
}

document.getElementById("get").addEventListener("click", (e) => {
  clearMovie();
  let id = document.getElementById("options").value;
  getMovie(id);
});
