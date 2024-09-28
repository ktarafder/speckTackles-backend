// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Import Realtime Database functions

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUedVF1Fx7zMnMYQezY4hsGJZM506w--I",
  authDomain: "spectacles-a6a47.firebaseapp.com",
  databaseURL: "https://spectacles-a6a47-default-rtdb.firebaseio.com/",
  storageBucket: "spectacles-a6a47.appshot.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app); // Initialize the Realtime Database

export default db;
