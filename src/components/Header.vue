<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="header-container">
    <h1>Filmaway</h1>
    <button @click="router.push('/login')">Login</button>
  </div>
</template>

<style scoped>
h1 {
  margin: auto;
  font-size: 60px;
}

button {
  background-color: transparent;
  color: white;
  height: 70px;
  width: 80px;
  border: transparent;
  font-size: 20px;
}

button:hover {
  background-color: #cddcff;
  color: rgb(1, 1, 48);
  filter: drop-shadow(-10px 10px 10px #7c83a5);
}

.header-container {
  background-color: rgba(30, 48, 102, 0.742);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  border-radius: 10px;
}
</style>
