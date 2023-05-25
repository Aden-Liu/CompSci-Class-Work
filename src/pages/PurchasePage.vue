<script setup>
import axios from "axios";

const movieData = (
  await axios.get("https://api.themoviedb.org/3/movie/popular", {
    params: {
      api_key: import.meta.env.VITE_TMDB_API_KEY,
      region: "US",
      language: "en",
      include_adult: false,
    },
  })
).data;

console.log(movieData);
</script>

<template>
  <div v-if="movieData" class="tiles">
    <div v-for="movie in movieData.results" class="info-container">
    <h1>{{ movie.title }}</h1>
      <img
        class="movie-poster"
        :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
        alt="movie poster"
      />
      <h3>{{ movie.release_date }}</h3>
    </div>
  </div>
</template>

<style scoped></style>
