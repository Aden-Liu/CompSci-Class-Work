<script setup>
import axios from "axios";

// const store = useStore();
const props = defineProps(["id"]);

let open = false;
</script>

<template>
  <button type="button" @click="open = true">Open Modal</button>
  <Teleport to="body">
    <div class="modal" v-if="open == true">
      <p>Modal test</p>
      <button type="button" @click="open = false">Close Modal</button>
    </div>
  </Teleport>
</template>

<style scoped>
.modal {
  width: 300px;
  height: 300px;
}
</style>
