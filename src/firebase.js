import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuRWpRO-a5wPTTPYl9b-nhHXrOXippc-8",
  authDomain: "react-portfolio-prince.firebaseapp.com",
  projectId: "react-portfolio-prince",
  storageBucket: "react-portfolio-prince.appspot.com",
  messagingSenderId: "236462126356",
  appId: "1:236462126356:web:bfcf661832ba3e97757e01",
  measurementId: "G-LV72JEF9NF"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore();