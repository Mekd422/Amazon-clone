import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaH0PMpsiFlMLRuT-dB-hSBcFl-fA1o9I",
  authDomain: "clone-fff97.firebaseapp.com",
  projectId: "clone-fff97",
  storageBucket: "clone-fff97.firebasestorage.app",
  messagingSenderId: "256836508073",
  appId: "1:256836508073:web:fdf5f21412da67b7214cb8"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()