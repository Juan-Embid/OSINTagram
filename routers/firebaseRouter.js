
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
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

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


//lectura de datos
const querySnapshot = await getDocs(collection(db, "Publicaciones"));

const getTasks = () =>{
    return querySnapshot;
}


module.exports = firebaseRouter;