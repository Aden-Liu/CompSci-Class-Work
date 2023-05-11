<script>
import { apiKey } from "./key.js";
import axios from "axios";
import { ref } from "vue";

// function getMovieID() {
//   let movieID = parseInt(document.getElementById("movies").value);
//   return movieID;
// }

// async function getDetails() {
//   await axios({
//     method: "get",
//     url: `https://api.themoviedb.org/3/movie/${getMovieID()}?api_key=${apiKey}&language=en-US&append_to_response=videos`,
//   })
//     .then((result) => {
//       console.log(result);
//       createMovieTile(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

export default {
  setup() {
    let movieSelect = ref("75612");
    let movieData = ref(null);

    const getDetails = async () => {
      const result = await axios.get(`https://api.themoviedb.org/3/movie/${movieSelect.value}?api_key=${apiKey}&language=en-US&append_to_response=videos`);
      movieData.value = result.data;
    }

    return {
      movieSelect,
      movieData,
      getDetails
    }
  },
}
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
  <div id="movie" ref="tile">
  </div>
</template>

<style scoped></style>
