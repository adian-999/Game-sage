// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAHKUp5J_cAx_jH6PV2A0eyl2-8JoeDgI",
  authDomain: "game-review-b92b2.firebaseapp.com",
  projectId: "game-review-b92b2",
  storageBucket: "game-review-b92b2.firebasestorage.app",
  messagingSenderId: "810617048367",
  appId: "1:810617048367:web:46d34e2c0ffc1a37bde5da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const googleProvider = new GoogleAuthProvider();
 export {auth,googleProvider}



