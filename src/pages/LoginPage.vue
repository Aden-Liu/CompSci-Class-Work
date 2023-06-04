<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
let username = ref();
let password = ref();
let error = ref();

function login() {
  if (username.value == "tmdb" && password.value == "movies") {
    router.push("purchase");
  } else {
    error.value = "Incorrect Username or Password";
    console.log(username.value);
    console.log(password.value);
  }
}
</script>

<template>
  <div>
    <h1>Sign In</h1>
    <form class="login-box" @submit.prevent="login()">
      <input
        class="login-info"
        type="text"
        placeholder="Username"
        v-model="username"
      />
      <input
        class="login-info"
        type="password"
        placeholder="Password"
        v-model="password"
      />
      <input class="login-button" type="submit" value="Login" />
    </form>
    <p id="error-message">{{ error }}</p>
  </div>
</template>

<style scoped>
.login-box {
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.login-info {
  border: 2px solid black;
  border-radius: 4px;
  margin: 10px;
  padding: 7px;
}

.login-button {
  border-radius: 5px;
  margin: 10px;
  padding: 3px;
  font-weight: bold;
}

h1 {
  margin: 0;
  position: absolute;
  top: 35%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
