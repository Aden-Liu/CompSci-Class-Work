<script setup></script>

<template>
  <div class="hero-container">
    <img src="../assets/speece.jpg" />
    <div class="hero-content">
      <h1>Welcome to WASD Inc.</h1>
      <h2>
        This is a website that sells movies. Please use it, I'm begging you.
        We're going to go bankrupt soon.
      </h2>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 100%;
  height: 100vh;
}

.hero-content {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}
</style>
