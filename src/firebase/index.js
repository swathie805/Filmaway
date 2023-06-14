import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAu4GME75pvrKms_sKiN7aaPVGxdxp-fJw",
  authDomain: "filmaway-b43e9.firebaseapp.com",
  projectId: "filmaway-b43e9",
  storageBucket: "filmaway-b43e9.appspot.com",
  messagingSenderId: "106374667824",
  appId: "1:106374667824:web:e8249c9729c3193d8957f5"
};

const config = initializeApp(firebaseConfig);
export const auth = getAuth(config);
export const firestore = getFirestore(config);