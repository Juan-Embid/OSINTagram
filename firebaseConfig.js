"use strict";

// Configurar Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHJLQN072dku6BP5CPgeYkUMT_3--hO58",
  authDomain: "osintagram-be0cd.firebaseapp.com",
  projectId: "osintagram-be0cd",
  storageBucket: "osintagram-be0cd.appspot.com",
  messagingSenderId: "403892278855",
  appId: "1:403892278855:web:1e87699fa642b6864b0362"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const querySnapshot = await getDocs(collection(db, "Publicaciones"));


module.exports = firebaseConfig;
