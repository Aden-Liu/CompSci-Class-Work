<script setup>
import { useStore } from "../store";

const store = useStore();
</script>

<template>
  <div class="cart-box" v-for="item in store.cart">
    <div class="movie-container">
      <img
        :src="`https://image.tmdb.org/t/p/w500/${item.poster}`"
        alt="Movie poster"
      />
      <h1>{{ item.title }}</h1>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 25%;
  margin: 0.5rem;
  border-radius: 7px;
}
.movie-container {
  position: relative;
  display: flex;
  flex-direction: column;
  border: 3px solid;
  margin: 1rem;
  border-radius: 7px;
}

h1 {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 60%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 150%;
}
</style>
