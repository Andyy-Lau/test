import { TMDB_API_KEY } from "./key.js";

const movies = document.getElementById("movies");
const getTMDBData = async (url) => {
  return (await axios.get(url)).data;
};

const createMovieContainer = (movie) => {
  const container = document.createElement("div");
  const text = document.createElement("div");
  const titleDiv = document.createElement("div");
  const movieTitle = document.createElement("h1");
  const movieOverview = document.createElement("h2");
  const movieTagline = document.createElement("h2");
  const moviePopularity = document.createElement("h2");
  const movieBudget = document.createElement("h2");
  const movieReleaseDate = document.createElement("h2");
  const movieRuntime = document.createElement("h2");
  const movieOriginalLanguage = document.createElement("h2");
  const movieImg = document.createElement("img");
  const trailerButton = document.createElement("button");

  container.classList.add("container");
  titleDiv.classList.add("title");
  text.classList.add("description");
  movieImg.src = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
  movieTitle.innerText = movie.title;
  movieTagline.innerText = movie.tagline;
  movieOverview.innerText =
    movie.overview === ""
      ? `There is no overview available for ${movie.title}`
      : movie.overview;
  movieReleaseDate.innerText = `This movie was released in ${movie.release_date}`;
  moviePopularity.innerText = `Movie popularity: ${movie.popularity}`;
  movieBudget.innerText =
    movie.budget == 0
      ? "The budget is not available"
      : `The budget for this movie is $${movie.budget}`;
  movieRuntime.innerText = `The movie runtime is ${movie.runtime} minutes`;
  movieOriginalLanguage.innerText = `(${movie.original_language}) is the original language of ${movie.title}`;
  trailerButton.innerText = "Trailer";

  trailerButton.addEventListener("click", async () => {
    const trailersData = await getTMDBData(
      `https://api.themoviedb.org/3//movie/${movie.id}/videos?api_key=${TMDB_API_KEY}&language=en-US&adult=false`
    );

    const trailer = trailersData.results.filter((trailer) => {
      return trailer.type === "Trailer";
    });

    !trailer.length
      ? alert("Sorry! No trailers for this film.")
      : window.open(`https://www.youtube.com/watch?v=${trailer.at(0).key}`);
  });

  titleDiv.append(movieTitle);
  titleDiv.append(movieTagline);

  text.append(movieReleaseDate);
  text.append(movieOverview);
  text.append(moviePopularity);
  text.append(movieBudget);
  text.append(movieRuntime);
  text.append(movieOriginalLanguage);

  container.append(titleDiv);
  container.append(movieImg);
  container.append(text);
  container.append(trailerButton);

  return container;
};

async function getMovie(id) {
  let movie = await getTMDBData(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}&language=en-US&adult=false`
  );
  const container = createMovieContainer(movie);
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
