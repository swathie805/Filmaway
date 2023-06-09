<script setup>
import { useStore } from "../store/index.js";

const store = useStore();
</script>

<template>
  <div id="background">
    <div class="cart-container">
      <div class="items" v-for="movie in store.cart">
        <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster}`" />
        <h1 id="title">{{ movie.title }}</h1>
      </div>
    </div>
  </div>
</template>

<style>
.cart-container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(1, 1, 48);
}

.items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 40px;
  margin: 30px;
  width: 500px;
  background-color: rgba(210, 237, 252, 0.3);
  border-radius: 10px;
}

h1 {
  font-size: 25px;
  margin-top: 50px;
  text-align: center;
}

#title {
  padding-left: 20px;
}

img {
  width: 220px;
  margin-left: 50px;
  vertical-align: center;
  margin: 10px;
  padding-right: 40px;
}
</style>
