<script setup>
import axios from "axios";

const movieData = await axios.get(
  "https://api.themoviedb.org/3/movie/popular",
  {
    params: {
      api_key: import.meta.env.VITE_TMDB_API_KEY,
      include_adult: false,
    },
  }
);

console.log(movieData);
</script>

<template>
  <div v-if="movieData" class="tiles">
    <div v-for="i in movieData.data.results">
      <img
        :src="`https://image.tmdb.org/t/p/w500${movieData.data.poster_path}`"
        alt="movie poster"
      />
    </div>
  </div>
</template>

<style scoped></style>
