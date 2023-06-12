import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZ_UpSx_YoONNl1QKUatYF-m4THaHvy8k",
  authDomain: "summative-b3c37.firebaseapp.com",
  projectId: "summative-b3c37",
  storageBucket: "summative-b3c37.appspot.com",
  messagingSenderId: "198679112939",
  appId: "1:198679112939:web:782b1289e09601aa3ce2ae"
};

const config = initializeApp(firebaseConfig);
export const auth = getAuth(config);
export const firestore = getFirestore(config);