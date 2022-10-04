// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlgi_ZPtM0CpKzYS9h1ySdsZQLIqqeBrU",
  authDomain: "curd-assignment.firebaseapp.com",
  projectId: "curd-assignment",
  storageBucket: "curd-assignment.appspot.com",
  messagingSenderId: "69142625983",
  appId: "1:69142625983:web:591cd5dfb2c029ffb2100a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);