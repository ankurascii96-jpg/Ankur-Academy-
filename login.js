import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDa4i9AqX-P6y9XB9vcI2XZkRO_MzpDn-A",
  authDomain: "ankur-academy-b01a3.firebaseapp.com",
  projectId: "ankur-academy-b01a3",
  storageBucket: "ankur-academy-b01a3.firebasestorage.app",
  messagingSenderId: "378701988785",
  appId: "1:378701988785:web:5bf05a5368384e60a37390",
  measurementId: "G-7MEDDDE7KV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.querySelector('input[type="email"]').value;
  const password = document.querySelector('input[type="password"]').value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login Successful");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});
