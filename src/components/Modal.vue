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
        <button class="exit-button" type="button" @click="$emit('showModal')">
          X
        </button>
        <div v-if="movieData">
          <img
            :src="`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`"
            alt="Movie Poster"
          />
          <h1>{{ movieData.title }}</h1>
          <h3>{{ movieData.release_date }}</h3>
          <p>{{ movieData.overview }}</p>
          <h3>Rating: {{ movieData.vote_average }}/10</h3>
          <h3>Vote Count: {{ movieData.vote_count }}</h3>
          <button
            class="cart-button"
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
  position: relative;
  background-color: white;
  padding: 5px;
  width: 50vw;
  border-radius: 7px;
  border: 2px solid;
}

img {
  width: 20vw;
  border-radius: 7px;
  margin: 1rem;
  float: left;
}

button {
  margin: 4px;
  position: absolute;
  background-color: blueviolet;
  font-weight: bold;
  color: white;
  border-radius: 4px;
}

.exit-button {
  padding: 2px;
  padding-left: 6px;
  padding-right: 6px;
  top: 0;
  right: 0;
}

.cart-button {
  padding: 3px;
  padding-left: 10px;
  padding-right: 10px;
  bottom: 0;
  right: 0;
}
</style>
