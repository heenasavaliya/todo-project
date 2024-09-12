// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Correct import for Firebase Authentication
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBwmRo8jOFbf1Px11B6C53I7OuSONE5YE",
  authDomain: "todo-c3b80.firebaseapp.com",
  projectId: "todo-c3b80",
  storageBucket: "todo-c3b80.appspot.com",
  messagingSenderId: "875620705266",
  appId: "1:875620705266:web:8fda5ecdc8d0fb4a34816b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);  // Initialize Firebase Auth correctly
const firestore = getFirestore(app);  // Initialize Firestore

export { auth, firestore };
