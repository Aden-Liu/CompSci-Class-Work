<script setup>
import { useRouter } from "vue-router";
import { ref } from 'vue';

const router = useRouter();
let username = ref();
let password = ref();
let error = ref();

function login() {
    if (username.value == "tmdb" && password.value == "movies") {
        router.push('purchase')
    } else {
        error.value = "Incorrect Username or Password";
        console.log(username.value);
        console.log(password.value);
    }
}
</script>

<template>
  <form class="login-box">
    <input type="text" placeholder="Username" v-model="username"/>
    <input type="password" placeholder="Password" v-model="password"/>
    <button type="button" @click="login()">Login</button>
  </form>
  <p id="error-message">{{ error }}</p>
</template>

<style scoped></style>
