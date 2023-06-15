<script setup>
import { useStore } from "../store/index.js";

const store = useStore();

const removeItem = (movie) => {
  const index = store.cart.findIndex((item) => item.id === movie.id);
  if (index > -1) {
    store.removeFromCart(index);
  }
};
</script>

<template>
  <div id="bg">
  <div class="cart-container">
    <div class="items" v-for="movie in store.cart">
      <h1 id="title">{{ movie.title }}</h1>
      <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster}`" />
      <button @click="removeItem(movie)">Remove</button>
    </div>
  </div>
</div>
</template>

<style>
#bg {
  background-color: rgb(1, 1, 48);
}

.cart-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 100px;
  width: 250px;
  padding-left: 68px;
  align-items: center;
}

h1 {
  font-size: 25px;
  margin-top: 50px;
  text-align: left;
}

#title {
  padding-left: 20px;
  color: white;
}

img {
  width: 300px;
  margin-left: 50px;
  vertical-align: center;
  margin: 10px;
  padding-right: 40px;
}

button {
  background-color: rgb(162, 178, 250);
  color: rgb(1, 1, 48);
  padding: 5px;
  width: 250px;
  border: transparent;
  font-size: 20px;
  border-radius: 2px;
}

button:hover {
  background-color: #e2a3ff;
  color: rgb(1, 1, 48);
  filter: drop-shadow(-10px 10px 10px #987ca5);
}
</style>
