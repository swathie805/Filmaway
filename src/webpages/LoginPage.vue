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
    alert(
      "You're currently facing short-term memory loss; you typed the password incorrectly."
    );
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
  const firestoreCart = await getDoc(doc(firestore, "carts", user.email));
  store.user = user;
  if (firestoreCart.exists()) {
    const { cart } = firestoreCart.data();
    store.cart = cart;
  }
  router.push("/purchase");
};
</script>

<template>
  <img
    id="bg-image"
    :src="`https://media.istockphoto.com/id/1364376802/vector/glow-modern-background-blur.jpg?s=612x612&w=0&k=20&c=SBOz5Ge_Q_jidQ--q2Cud70BJk8AOcdnWFRT1jh65BQ=`"
    alt=""
  />
  <div class="auth-container">
    <div id="login">
      <h1>Login via Email</h1>
      <form class="login" @submit.prevent="loginViaEmail()">
        <input v-model="email" type="email" placeholder="Email" />
        <input v-model="passwordOne" type="password" placeholder="Password" />
        <input class="btn" type="submit" value="Login" />
      </form>
    </div>
    <div class="vl"></div>
    <div class="register">
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
        <input class="btn" type="submit" value="Register" />
      </form>
      <img
        class="google-login"
        @click="registerViaGoogle()"
        src="https://cdn-icons-png.flaticon.com/512/270/270014.png"
      />
    </div>
  </div>
</template>

<style scoped>
#bg-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
.auth-container {
  border-radius: 10px;
  margin: auto;
  padding: 60px 30px;
  font-family: sans-serif;
  color: white;
  background-color: rgba(177, 182, 255, 0.25);
  filter: drop-shadow(-10px 10px 20px #827397);
  margin-top: 200px;
  height: 500px;
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.vl {
  border-left: 6px solid white;
  height: 400px;
}

.setup,
.login {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.register {
  margin-right: 40px;
}

#login {
  margin-left: 35px;
  margin-bottom: 60px;
}

.google-login {
  border: transparent;
  width: 100px;
  vertical-align: center;
}

.btn {
  background-color: rgb(3, 22, 85);
  color: white;
  border: transparent;
  font-size: 20px;
  border-radius: 5px;
}

.btn:hover {
  background-color: #cddcff;
  color: rgb(1, 1, 48);
  filter: drop-shadow(-10px 10px 10px #7c83a5);
}
</style>
