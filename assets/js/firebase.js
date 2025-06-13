// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAlgR8b99MqimCwjarDHoS7dHZb-mFEnU",
  authDomain: "hackopsauthsystem.firebaseapp.com",
  projectId: "hackopsauthsystem",
  storageBucket: "hackopsauthsystem.appspot.com",
  messagingSenderId: "352126488925",
  appId: "1:352126488925:web:fa7a3ab7a1e87447be18b4",
  measurementId: "G-Y34RFR893Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export for other files
export {
  auth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification
};
