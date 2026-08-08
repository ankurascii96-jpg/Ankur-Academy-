// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Firebase Config
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

export const auth = getAuth(app);
export const db = getFirestore(app);
