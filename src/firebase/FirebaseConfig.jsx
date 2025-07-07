// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRTEPS5eSapPaU5itvJeRQZQr5Lg37Gx4",
  authDomain: "importam-fd07f.firebaseapp.com",
  projectId: "importam-fd07f",
  storageBucket: "importam-fd07f.firebasestorage.app",
  messagingSenderId: "836680444061",
  appId: "1:836680444061:web:08aadc41e65f944b66cc74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app)
const auth = getAuth(app);
export {auth,fireDB}