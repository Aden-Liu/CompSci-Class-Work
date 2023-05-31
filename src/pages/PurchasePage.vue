<script setup>
import axios from "axios";
import Modal from "../components/Modal.vue";
import { useRouter } from "vue-router";
import { useStore } from "../store";

const router = useRouter();
const store = useStore();
let modalView = ref(false);
let selectedID = ref(null);

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

const showModal = (movieID) => {
  modalView = !modalView;
  selectedID.value = movieID;
};
</script>

<template>
  <div>
    <button type="button" @click="router.push('/cart')">Cart</button>
    <div v-if="movieData" class="tiles">
      <div v-for="movie in movieData.results" class="info-container">
        <img
          class="movie-poster"
          :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
          alt="movie poster"
          @click="showModal(movie.id)"
        />
      </div>
    </div>
  </div>
  <Modal v-if="showModal" :id="selectedID" @showModal="showModal"/>
</template>

<style scoped></style>
