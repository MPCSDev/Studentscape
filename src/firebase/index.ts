import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQvlMCRfZdV_eop4ckAdc1zQRzbu8utCs",
  authDomain: "shishya-71129.firebaseapp.com",
  projectId: "shishya-71129",
  storageBucket: "shishya-71129.appspot.com",
  messagingSenderId: "987736523816",
  appId: "1:987736523816:web:282a7c775426f8b675a11d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

