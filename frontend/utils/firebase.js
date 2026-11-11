// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "cognexaai-7df04.firebaseapp.com",
  projectId: "cognexaai-7df04",
  storageBucket: "cognexaai-7df04.firebasestorage.app",
  messagingSenderId: "23823282789",
  appId: "1:23823282789:web:2aee759b0dffa44f794c8c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
