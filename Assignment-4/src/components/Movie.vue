<script setup>
import {apiKey} from "./key.js";
import axios from "axios";

function getMovieID() {
  let movieID = parseInt(document.getElementById('movies').value);
  return movieID;
}

async function getDetails() {
  await axios({
    method: "get",
    url: `https://api.themoviedb.org/3/movie/${getMovieID()}?api_key=${apiKey}&language=en-US&append_to_response=videos`,
  })
    .then((result) => {
      console.log(result);
      createMovieTile(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

function createMovieTile(result) {
  document.getElementById("movie").innerHTML = "";
  let page = document.getElementById("movie");
  let title = document.createElement("h1");
  let poster = document.createElement("img");
  let date = document.createElement("h3");
  let synopsis = document.createElement("p");
  let budget = document.createElement("h3");
  let runtime = document.createElement("h3");
  let popularity = document.createElement("h3");
  let revenue = document.createElement("h3");
  let tagline = document.createElement("p");
  let voteAverage = document.createElement("h3");
  let voteCount = document.createElement("h3");
  let trailer = document.createElement("iframe");

  title.innerHTML = `${result.data.title}`;
  title.setAttribute("class", "details-box");
  title.setAttribute("id", "title-box");
  poster.src = `https://image.tmdb.org/t/p/w500${result.data.poster_path}`;
  poster.setAttribute("id", "movie-poster");
  date.innerHTML = `Released: ${result.data.release_date}`;
  date.setAttribute("class", "info-box");
  synopsis.innerHTML = `${result.data.overview}`;
  synopsis.setAttribute("class", "info-box");
  budget.innerHTML = `Budget: $${result.data.budget}`;
  budget.setAttribute("class", "info-box");
  revenue.innerHTML = `Revenue: $${result.data.revenue}`;
  revenue.setAttribute("class", "info-box");
  runtime.innerHTML = `Runtime: ${result.data.runtime}  Minutes`;
  runtime.setAttribute("class", "info-box");
  popularity.innerHTML = `Popularity: ${result.data.popularity}`;
  popularity.setAttribute("class", "info-box");
  tagline.innerHTML = `"${result.data.tagline}"`;
  tagline.setAttribute("class", "info-box");
  voteAverage.innerHTML = `Rating: ${result.data.vote_average}/10`;
  voteAverage.setAttribute("class", "info-box");
  voteCount.innerHTML = `# of Ratings: ${result.data.vote_count}`;
  voteCount.setAttribute("class", "info-box");

  let trailerData = result.data.videos.results.filter((trailer) => {
    return trailer.type === "Trailer";
  });

  trailer.src = `https://www.youtube.com/embed/${trailerData.at(0).key}`;
  trailer.setAttribute("id", "trailer-box");

  page.appendChild(poster);
  page.appendChild(title);
  page.appendChild(date);
  page.appendChild(synopsis);
  page.appendChild(tagline);
  page.appendChild(budget);
  page.appendChild(runtime);
  page.appendChild(popularity);
  page.appendChild(revenue);
  page.appendChild(voteAverage);
  page.appendChild(voteCount);
  page.appendChild(trailer);
}
</script>

<template>
  <form id="movie-select">
    <label for="movies">Choose a movie</label>
    <select name="movies" id="movies">
      <option value="75612">Oblivion</option>
      <option value="157336">Interstellar</option>
      <option value="406759">Moonfall</option>
      <option value="506072">Prospect</option>
      <option value="158852">Tomorrowland</option>
      <option value="696806">The Adam Project</option>
      <option value="588228">The Tomorrow War</option>
      <option value="286217">The Martian</option>
      <option value="412656">Chaos Walking</option>
      <option value="419704">Ad Astra</option>
    </select>
    <button id="get-button" type="button" @click="getDetails()">Get</button>
  </form>
  <div id="movie"></div>
</template>

<style scoped>
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

template {
  background-color: #1b998b;
}

#movie {
  border: 5px;
  border-style: solid;
  margin: 1%;
  border-color: #534d56;
  background-color: #decdf5;
}

#movie-poster {
  float: left;
  width: 250px;
  margin: 1%;
  border: 3px;
  border-style: solid;
}

.info-box {
  margin: 0.1%;
}

#movie-select {
  text-align: center;
  margin: 1%;
  padding: 1%;
  border: 3px;
  border-style: solid;
  background-color: aliceblue;
}

#get-button {
  padding: 0.1%;
}

#title-box {
  margin-top: 0.3%;
}
</style>
