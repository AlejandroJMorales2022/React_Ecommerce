// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQhrP7cb2w_qbYb5RxGm_prVeFQqyurpU",
  authDomain: "ecommerce-coder-ea8b3.firebaseapp.com",
  projectId: "ecommerce-coder-ea8b3",
  storageBucket: "ecommerce-coder-ea8b3.appspot.com",
  messagingSenderId: "641905754485",
  appId: "1:641905754485:web:2690dfe538410b91e0533c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);