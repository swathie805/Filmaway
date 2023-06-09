<script setup>
import { ref } from "vue";
import Modal from "../components/Modal.vue";
import { useStore } from "../store/index.js";
import { useRouter } from "vue-router";

const router = useRouter();
const showModal = ref(false);
const selectedRecordId = ref(0);
const store = useStore();

const toggleModal = (id) => {
  showModal.value = !showModal.value;
  selectedRecordId.value = id;
};
</script>

<template>
  <div id="background">
    <button id="btn" @click="router.push('/cart')">Cart</button>
    <div v-if="store.movies" class="tiles">
      <div v-for="movie in store.movies" class="tile">
        <img
          :src="`https://image.tmdb.org/t/p/w500/${movie.poster}`"
          @click="toggleModal(movie.id)"
        />
      </div>
    </div>
  </div>
  <Modal v-if="showModal" :id="selectedRecordId" @toggleModal="toggleModal()" />
</template>

<style scoped>
#background {
  background-color: rgb(1, 1, 48);
  top: 0;
  left: 0;
  position: fixed;
}
.tiles {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 40px;
  margin-left: 30px;
}

img {
  width: 300px;
}

button {
  border-radius: 5px;
  width: 70px;
  height: 45px;
}

button:hover {
  background-color: #cddcff;
  color: rgb(1, 1, 48);
  filter: drop-shadow(-10px 10px 10px #7c83a5);
}
</style>
