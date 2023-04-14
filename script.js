import { TMDB_API_KEY } from "./key.js";

const movies = document.getElementById("movies");
const getTMDBData = async (url) => {
  return (await axios.get(url)).data;
};

const createMovieContainer = (
  id,
  title,
  popularity,
  overview,
  poster,
  budget,
  tagline,
  releaseDate,
  runtime,
  originalLanguage
) => {
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
  movieImg.src = `https://image.tmdb.org/t/p/original/${poster}`;
  movieTitle.innerText = title;
  movieTagline.innerText = tagline;
  movieOverview.innerText = overview === "" ? `There is no overview available for ${title}` : overview;
  movieReleaseDate.innerText = `This movie was released in ${releaseDate}`;
  moviePopularity.innerText = `Movie popularity: ${popularity}`;
  movieBudget.innerText = budget == 0 ? "The budget is not available" : `The budget for this movie is $${budget}`;
  movieRuntime.innerText = `The movie runtime is ${runtime} minutes`;
  movieOriginalLanguage.innerText = `(${originalLanguage}) is the original language of ${title}`;
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
  console.log(movie);
  const container = createMovieContainer(
    movie.id,
    movie.title,
    movie.popularity,
    movie.overview,
    movie.poster_path,
    movie.budget,
    movie.tagline,
    movie.release_date,
    movie.runtime,
    movie.original_language
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
