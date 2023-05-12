<script>
import { apiKey } from "./key.js";
import axios from "axios";
import { ref } from "vue";

export default {
  setup() {
    let movieSelect = ref("75612");
    let movieData = ref(null);
    let trailerData = ref(null);

    const getDetails = async () => {
      const result = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieSelect.value}?api_key=${apiKey}&language=en-US&append_to_response=videos`
      );
      movieData.value = result;
      trailerData = result.data.videos.reults.filter((trailer) => {
        return trailer.type === "Trailer";
      });
    };
    return {
      movieSelect,
      movieData,
      trailerData,
      getDetails,
    };
  },
};
</script>

<template>
  <form id="movie-select">
    <label for="movies">Choose a movie</label>
    <select v-model="movieSelect" id="movies">
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
    <button id="get-button" type="button" @click="getDetails">Get</button>
  </form>
  <div v-if="movieData" id="movie">
    <img
      id="movie-poster"
      :src="`https://image.tmdb.org/t/p/w500${movieData.data.poster_path}`"
      alt="Movie Poster"
    />
    <h1 class="info-box">{{ movieData.data.title }}</h1>
    <h3 class="info-box">{{ movieData.data.release_date }}</h3>
    <p class="info-box">{{ movieData.data.overview }}</p>
    <p class="info-box">{{ movieData.data.tagline }}</p>
    <h3 class="info-box">Budget: {{ movieData.data.budget }}</h3>
    <h3 class="info-box">Revenue{{ movieData.data.revenue }}</h3>
    <h3 class="info-box">Runtime {{ movieData.data.runtime }} Minutes</h3>
    <h3 class="info-box">Popularity: {{ movieData.data.popularity }}</h3>
    <h3 class="info-box">Rating: {{ movieData.data.vote_average }}</h3>
    <h3 class="info-box"># of Reviews: {{ movieData.data.vote_count }}</h3>
    <iframe
      :src="`https://www.youtube.com/embed/${trailerData}`"
      frameborder="0"
    ></iframe>
  </div>
</template>

<style scoped>
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
