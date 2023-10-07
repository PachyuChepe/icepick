import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqgZTkIOU1FDJxLH8CZbBEtt4wA6UK0a0",
  authDomain: "sparta-Aleejin.firebaseapp.com",
  projectId: "sparta-leejin",
  storageBucket: "sparta-leejin.appspot.com",
  messagingSenderId: "44861350306",
  appId: "1:44861350306:web:3294770f6384aed70ed2fb",
  measurementId: "G-EWJVC04VRL",
};

// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
