<script setup>
import { useStore } from "../store";

const store = useStore();
</script>

<template>
  <div>
    <div v-for="item in store.cart">
        <h1>{{ item.title }}</h1>
        <img :src="`https://image.tmdb.org/t/p/w500/${item.poster}`" alt="Movie poster">
    </div>
  </div>
</template>

<style scoped></style>
