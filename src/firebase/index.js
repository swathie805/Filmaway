import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3mKgPdZ3Se10PxDwBn5YdsDJ-mH16C-o",
  authDomain: "vue-project-cdfdc.firebaseapp.com",
  projectId: "vue-project-cdfdc",
  storageBucket: "vue-project-cdfdc.appspot.com",
  messagingSenderId: "717601307619",
  appId: "1:717601307619:web:73fbba4e0277c9c98cfed6"
};

const config = initializeApp(firebaseConfig);
export const auth = getAuth(config);
export const firestore = getFirestore(config);