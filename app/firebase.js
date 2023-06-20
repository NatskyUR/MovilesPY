import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyBuWpH-us_0bBdF66Abb0UXoGeY1Q497Fw",
  authDomain: "upiicsa-1660a.firebaseapp.com",
  projectId: "upiicsa-1660a",
  storageBucket: "upiicsa-1660a.appspot.com",
  messagingSenderId: "44469479325",
  appId: "1:44469479325:web:77980b3c259edbce03b174",
  measurementId: "G-WXT5QN4NEP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)