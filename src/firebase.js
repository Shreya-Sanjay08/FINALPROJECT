import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyC6onFdorEpwVGvdqWQ6p5tQo1u_nLkRGg",
  authDomain: "attendance-41062.firebaseapp.com",
  projectId: "attendance-41062",
  storageBucket: "attendance-41062.firebasestorage.app",
  messagingSenderId: "774004446167",
  appId: "1:774004446167:web:31cba8253d0c72445e3192",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, signInWithEmailAndPassword, doc, getDoc, setDoc };
