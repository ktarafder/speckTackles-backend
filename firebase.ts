// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOChhCge3Gw6P397G4qEJVGRfgStzYeEE",
  authDomain: "spectacles-7fa7d.firebaseapp.com",
  projectId: "spectacles-7fa7d",
  storageBucket: "spectacles-7fa7d.appspot.com",
  messagingSenderId: "890245627870",
  appId: "1:890245627870:web:812b9c2348449da67de74f"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;