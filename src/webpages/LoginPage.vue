<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("");
const password = ref("");

const login = () => {
  if (username.value === "tmdb" && password.value === "movies") {
    router.push("/purchase");
  } else {
    alert("Invalid username/password!");
  }
};
</script>

<template>
  <div id="background">
    <form class="login-container" @submit.prevent="login()">
      <h2>Sign in</h2>
      <input type="text" placeholder="username" v-model="username" />
      <input type="password" placeholder="password" v-model="password" />
      <input type="submit" id="button" value="Login" />
    </form>
  </div>
</template>

<style>
#background {
  background-color: rgb(1, 1, 48);
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  position: fixed;
}

.login-container {
  border-radius: 25px;
  margin: auto;
  padding: 50px;
  width: 500px;
  height: 550px;
  align-items: center;
  background-color: #ddddff46;
  display: flex;
  flex-direction: column;
  margin-top: 250px;
  color: white;
  filter: drop-shadow(-10px 10px 10px #7c83a5);
  gap: 15px;
}

input {
  padding: 20px;
  margin: 10px;
  border-radius: 7px;
}

#button {
  text-align: right;
  border-radius: 12px;
}

#button:hover {
  background-color: #cddcff;
  color: rgb(1, 1, 48);
  filter: drop-shadow(-10px 10px 10px #7c83a5);
}

h2 {
  font-size: 45px;
  padding: 30px;
}
</style>
