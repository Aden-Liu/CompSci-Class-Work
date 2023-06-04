<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="header-container">
    <h1>WASD Inc.</h1>
    <button @click="router.push('/login')">Login</button>
  </div>
</template>

<style scoped>
.header-container {
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

button {
  padding: 8px;
  background-color: purple;
  color: white;
  font-weight: bold;
  border-radius: 4px;
}
</style>
