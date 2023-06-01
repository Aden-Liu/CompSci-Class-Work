<script setup>
import Header from "../components/Header.vue";
import Hero from "../components/Hero.vue";
import Footer from "../components/Footer.vue";
import { useStore } from "../store";
import axios from "axios";
import { storeToRefs } from "pinia";

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

const store = useStore();

store.movies = movieData.results;
</script>

<template>
  <div>
    <Header />
    <Hero />
    <Footer />
  </div>
</template>

<style scoped></style>
