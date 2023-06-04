<script setup>
import axios from "axios";
import { useStore } from "../store";

const store = useStore();
const props = defineProps(["id"]);

const movieData = (
  await axios.get(`https://api.themoviedb.org/3/movie/${props.id}`, {
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
    <div class="modal-outer" @click.self="$emit('showModal')">
      <div class="modal-inner">
        <button type="button" @click="$emit('showModal')">X</button>
        <div v-if="movieData">
          <img
            :src="`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`"
            alt="Movie Poster"
          />
          <h1>{{ movieData.title }}</h1>
          <h2>{{ movieData.release_date }}</h2>
          <button
            type="button"
            @click="store.addToCart(movieData.poster_path, movieData.title)"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-outer {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #00000099;
  z-index: 5;
}

.modal-inner {
  background-color: white;
}

img {
  width: 25vw;
}
</style>
