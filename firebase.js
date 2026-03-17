// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "websitebuilder-6b2d6.firebaseapp.com",
  projectId: "websitebuilder-6b2d6",
  storageBucket: "websitebuilder-6b2d6.firebasestorage.app",
  messagingSenderId: "337371995131",
  appId: "1:337371995131:web:c4e535fecea3fde0eb095e",
  measurementId: "G-BFXWXZ9G9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}