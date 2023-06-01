<script setup>
import axios from "axios";
import Modal from "../components/Modal.vue";
import { useRouter } from "vue-router";
import { useStore } from "../store/index.js";
import { ref } from "vue";

const router = useRouter();
const store = useStore();
const modalView = ref(false);
const selectedID = ref(0);

const showModal = (movieID) => {
  modalView.value = !modalView.value;
  selectedID.value = movieID;
};
</script>

<template>
  <div>
    <button type="button" @click="router.push('/cart')">Cart</button>
    <div v-if="store.movies" class="tiles">
      <div v-for="movie in store.movies" class="movie-container">
        <img
          class="movie-poster"
          :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
          alt="movie poster"
          @click="showModal(movie.id)"
        />
      </div>
    </div>
  </div>
  <Modal v-if="modalView" :id="selectedID" @showModal="showModal()" />
</template>

<style scoped>
img {
  width: 250px;
}

.tiles {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
</style>
