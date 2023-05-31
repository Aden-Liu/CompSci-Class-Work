<script setup>
import axios from "axios";

const store = useStore();
const props = defineProps(["id"]);

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
</script>

<template>
  <Teleport to="body">
    <div class="modal-container">
      <button type="button" @click="$emit('showModal')">X</button>
      <div v-if="movieData">
      <img :src="`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`" alt="Movie Poster">
      <h1>{{ movieData.title }}</h1>
      <h2>{{ movieData.release_date }}</h2>
      <button type="button" @click="store.addToCart(movieData.poster_path, movieData.title)">Add to Cart</button>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal {
  width: 300px;
  height: 300px;
}
</style>
