import { tmdbKey } from "./key.js";

const getData = async (url) => {
  return (await axios.get(url)).data;
}

const createTile = (
  id,
  poster,
  title,
  releaseDate,
  synopsis,
  language,
  genre,
  rating,
  average,
  ageRating
) => {
  const tile = document.createElement("div");
  const details = document.createElement("div");
  const img = document.createElement("img");
  const name = document.createElement("h2");
  const date = document.createElement("p");
  const summary = document.createElement("p");
  const tongue = document.createElement("p");
  const category = document.createElement("p");
  const popularity = document.createElement("p");
  const voteAverage = document.createElement("div");
  const isAdult = document.createElement("div");

  tile.classList.add("movie-tile");
  img.src = "https://image.tmdb.org/t/p/w500/${poster}";
  name.innerText = title;
  date.innerText = releaseDate;
  summary.innerText = synopsis;
  tongue.innerText = language;
  category.innerText = genre;
  popularity.innerText = rating;
  voteAverage.innerText = average;
  isAdult.innerText = ageRating;

  details.append(name);
  details.append(date);
  details.append(summary);
  details.append(tongue);
  details.append(category);
  details.append(popularity);
  details.append(voteAverage);
  details.append(isAdult);

  tile.append(img);
  tile.append(details);

  return tile;
};

let movieData = await getData(
  "https://api.themoviedb.org/3//movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&adult=false"
);
const movies = document.getElementById("movie");

movieData.results.forEach((movie) => {
  const tile = createTile(
    movie.id,
    movie.poster_path,
    movie.title,
    movie.release_date,
    movie.overview,
    movie.original_language,
    movie.genre_ids,
    movie.popularity,
    movie.vote_average,
    movie.adult
  );
  movies.appendChild(tile);
});
