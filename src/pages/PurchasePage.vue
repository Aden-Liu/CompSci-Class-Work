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
    <header>
      <button class="cart-button" @click="router.push('/cart')">Cart</button>
    </header>
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
  width: 85%;
  border-radius: 7px;
  margin: 0.5rem;
}

.tiles {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding-top: 55px;
}

header {
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  padding-left: 7px;
  padding-right: 7px;
  border-bottom: 4px solid;
  background-color: white;
  top: 0px;
  width: 100%;
}

.cart-button {
  margin: 10px;
  padding: 7px;
  padding-left: 15px;
  padding-right: 15px;
  font-weight: bold;
  background-color: blueviolet;
  color: white;
  border: none;
  border-radius: 4px;
}
</style>
