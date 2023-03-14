// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf3bBiIYAzEcHiBKdCZ9-m__3n5yNJn_Y",
  authDomain: "money-manager-65587.firebaseapp.com",
  projectId: "money-manager-65587",
  storageBucket: "money-manager-65587.appspot.com",
  messagingSenderId: "409642261801",
  appId: "1:409642261801:web:96257e9e8ce9f0f4d86b38",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db;
