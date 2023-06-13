<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../store";
import { auth, firestore } from "../firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDoc, doc } from "@firebase/firestore";

const store = useStore();
const router = useRouter();
const email = ref("");
const passwordOne = ref("");
const passwordTwo = ref("");

const registerViaEmail = async () => {
  if (passwordOne.value !== passwordTwo.value) {
    alert("You're currently facing short-term memory loss; you typed the password incorrectly.");
    return;
  }

  const { user } = await createUserWithEmailAndPassword(
    auth,
    email.value,
    passwordOne.value
  );
  store.user = user;
  router.push("/purchase");
};

const loginViaEmail = async () => {
  try {
    const { user } = await signInWithEmailAndPassword(
      auth,
      email.value,
      passwordOne.value
    );
    store.user = user;
    router.push("/purchase");
  } catch (error) {
    console.log(error);
  }
};

const registerViaGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const { user } = await signInWithPopup(auth, provider);
  store.user = user;
  const { cart } = (await getDoc(doc(firestore, "carts", user.email))).data();
  store.cart = cart;
  router.push("/purchase");
};
</script>

<template>
  <div class="bg-image">
    <div class="auth-container">
      <div>
        <h1>Register via Google</h1>
        <button @click="registerViaGoogle()">Google</button>
      </div>
      <div>
        <h1>Register via Email</h1>
        <form class="setup" @submit.prevent="registerViaEmail()">
          <input v-model="email" type="email" placeholder="email" />
          <input
            v-model="passwordOne"
            type="password"
            placeholder="Enter Password"
          />
          <input
            v-model="passwordTwo"
            type="password"
            placeholder="Re-enter Password"
          />
          <input type="submit" value="Register" />
        </form>
        <hr />
        <h1>Login via Email</h1>
        <form class="login" @submit.prevent="loginViaEmail()">
          <input v-model="email" type="email" placeholder="Email" />
          <input v-model="passwordOne" type="password" placeholder="Password" />
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-image {
  width: 100vw;
  height: 100vh;
  /* background-image: url(https://static.displate.com/857x1200/displate/2021-03-12/758b90b3aa7f6aa1d3f64b20778ed3ec_f85353a0748ebdc4176204f4c5342850.jpg); */
  background-size: cover;
}
.auth-container {
  display: flex;
  gap: 5rem;
  background-color: rgb(178, 206, 255);
}

.setup,
.login {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
