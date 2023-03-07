// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbjtGkfBskGBk8IXNM7xkf860B5hUStz0",
  authDomain: "practice-todo-app-36517.firebaseapp.com",
  projectId: "practice-todo-app-36517",
  storageBucket: "practice-todo-app-36517.appspot.com",
  messagingSenderId: "893119190208",
  appId: "1:893119190208:web:66eb5c5a89708fe7548925"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
