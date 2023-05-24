<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div id="header-container">
    <h1>WASD Inc.</h1>
    <button @click="router.push('/login')">Login</button>
  </div>
</template>

<style scoped></style>
