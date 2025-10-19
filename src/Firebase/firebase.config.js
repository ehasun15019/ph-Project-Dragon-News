// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9G3o9ZaT7MxUXbvd3ojmCoMofOjcosv0",
  authDomain: "dragon-news-authenticati-5b84e.firebaseapp.com",
  projectId: "dragon-news-authenticati-5b84e",
  storageBucket: "dragon-news-authenticati-5b84e.firebasestorage.app",
  messagingSenderId: "1042561008045",
  appId: "1:1042561008045:web:1da4e827bca5751b52e124"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);