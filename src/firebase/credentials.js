// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCewIXoxyuXAu9FrvAVNPzS9_dV5BF6esI",
  authDomain: "vroom-co.firebaseapp.com",
  projectId: "vroom-co",
  storageBucket: "vroom-co.firebasestorage.app",
  messagingSenderId: "658293080543",
  appId: "1:658293080543:web:1bd95c5b1594f47a87c46a"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore(appFirebase);
export default appFirebase;