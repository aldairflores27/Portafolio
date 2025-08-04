// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhAdEDMxNYg0a-IYq1h_obFuNSuhoui_c",
  authDomain: "portafolioweb-e110d.firebaseapp.com",
  projectId: "portafolioweb-e110d",
  storageBucket: "portafolioweb-e110d.appspot.com",
  messagingSenderId: "466484900778",
  appId: "1:466484900778:web:8263a9c4fa21cec97031d3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
