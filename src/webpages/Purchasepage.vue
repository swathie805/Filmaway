<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import Modal from "../components/Modal.vue";

const router = useRouter();
const genre = ref(28);
const search = ref("");
const movies = ref(null);
const page = ref(1);
const currentURL = ref("");
const totalPages = ref(0);
const showModal = ref(false);
const selectedRecordId = ref(0);

const toggleModal = (id) => {
  showModal.value = !showModal.value;
  selectedRecordId.value = id;
};

const getTMDBData = async (url, options, page) => {
  movies.value = (
    await axios.get(url, {
      params: {
        api_key: import.meta.env.VITE_TMDB_API_KEY,
        region: "US",
        language: "en",
        include_adult: false,
        page,
        ...options,
      },
    })
  ).data;
  totalPages.value = movies.value.total_pages;
  currentURL.value = url;
};
</script>

<template>
  <div id="bg">
    <div class="controls">
      <div>
        <input
          type="search"
          placeholder="Enter search items"
          v-model="search"
        />
        <button
          @click="
            getTMDBData('https://api.themoviedb.org/3/search/movie', {
              query: search,
            })
          "
        >
          Search
        </button>
      </div>
      <div>
        <select v-model="genre">
          <option value="12">Adventure</option>
          <option value="14">Fantasy</option>
          <option value="16">Animation</option>
          <option value="18">Drama</option>
          <option value="27">Horror</option>
          <option value="28">Action</option>
          <option value="35">Comedy</option>
          <option value="36">History</option>
          <option value="37">Western</option>
          <option value="53">Thriller</option>
          <option value="80">Crime</option>
          <option value="99">Documentary</option>
          <option value="878">Science Fiction</option>
          <option value="9648">Mystery</option>
          <option value="10402">Music</option>
          <option value="10749">Romance</option>
          <option value="10751">Family</option>
          <option value="10752">War</option>
          <option value="10770">TV Movie</option>
        </select>
        <button
          @click="
            getTMDBData('https://api.themoviedb.org/3/discover/movie', {
              with_genres: genre,
            })
          "
        >
          Get
        </button>
        <button id="cart" @click="router.push('/cart')" >Cart</button>/>
      </div>
    </div>
    <div v-if="movies" class="tiles">
      <div v-for="movie in movies.results" :key="movie.id" class="tile">
        <img
          :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
          @click="toggleModal(movie.id)"
        />
      </div>
    </div>
    <div class="pagination">
      <button
        @click="
          getTMDBData(
            currentURL,
            {
              query: search,
            },
            page === 1 ? 1 : page--
          )
        "
      >
        Prev
      </button>
      <p>{{ `Page ${page} of ${totalPages}` }}</p>
      <button
        @click="
          getTMDBData(
            currentURL,
            {
              query: search,
            },
            page >= totalPages ? totalPages : page++
          )
        "
      >
        Next
      </button>
    </div>
  </div>
  <Modal v-if="showModal" :id="selectedRecordId" @toggleModal="toggleModal()" />
</template>

<style scoped>
#bg {
  background-color: rgb(1, 1, 48);
}

#cart {
  border: transparent;
  width: 80px;
}

.tiles {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

img {
  width: 350px;
}

.pagination {
  display: flex;
  gap: 1rem;
  position: fixed;
  right: 0px;
  bottom: 0px;
  padding: 20px;
  color: white;
}

input {
  height: 42px;
  border-radius: 5px;
  font-size: larger;
  font-family: "sans-serif";
}

.controls {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}

select {
  font-family: "sans-serif";
  font-size: 20px;
  height: 42px;
  border-radius: 5px;
}

p {
  font-size: 20px;
  align-self: center;
}

button {
  border-radius: 5px;
  width: 70px;
  height: 45px;
  font-family: "sans-serif";
  font-size: 20px;
}

button:hover {
  background-color: #cddcff;
  color: rgb(1, 1, 48);
  filter: drop-shadow(-10px 10px 10px #7c83a5);
}
</style>
