<script setup>
import axios from "axios";
import { useStore } from "../store";

const store = useStore();
const props = defineProps(["id"]);

const movie = (
  await axios.get(`https://api.themoviedb.org/3/movie/${props.id}`, {
    params: {
      api_key: import.meta.env.VITE_TMDB_API_KEY,
      region: "US",
      language: "en",
      include_adult: false,
    },
  })
).data;
</script>

<template>
  <Teleport to="body">
    <div class="modal-outer-container" @click.self="$emit('toggleModal')">
      <div class="modal-inner-container">
        <button @click="$emit('toggleModal')">X</button>
        <div class="info" v-if="movie">
          <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" />
          <h1>{{ movie.title }}</h1>
          <h2>{{ movie.release_date }}</h2>
          <h3 @click="store.addToCart(movie.poster_path, movie.title)">Buy</h3>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-outer-container {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #000000a8;
  z-index: 5;
}

.modal-outer-container .modal-inner-container {
  font-family: "Hind", sans-serif;
  color: white;
  background-color: rgba(210, 237, 252, 0.3);
  filter: blur(20px);
  filter: drop-shadow(-10px 10px 20px #737597);
  margin-top: 50px;
  min-height: 400px;
  width: 60%;
  padding: 30px;
  border-radius: 10px;
}

.modal-outer-container .modal-inner-container button {
  position: absolute;
  right: 0px;
  padding: 1rem;
  border: none;
  font-weight: bold;
}

.modal-outer-container .modal-inner-container {
  font-size: 1.25rem;
  color: white;
}

img {
  display: block;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
}

h1 {
  font-family: "Archivo Black";
  font-size: 35px;
  margin-top: 5px;
  width: 100%;
  padding: 2px;
  text-align: center;
}

h2 {
  font-size: 30px;
  text-align: center;
}

h3 {
  cursor: pointer;
  position: relative;
  right: 10px;
  border-radius: 10px;
  margin-right: 20px;
  font-weight: bold;
  border: 10px;
  background-color: #5398dd;
  padding: 15px;
  width: 80px;
}

h3:hover {
  background-color: #60a6f0ce;
  color: white;
  filter: drop-shadow(-10px 10px 10px #737797);
}

button {
  font-size: 20px;
  padding-right: 15px;
  color: rgb(255, 255, 255);
  background-color: rgba(0, 0, 0, 0);
}
</style>
