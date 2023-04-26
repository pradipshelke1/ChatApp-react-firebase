import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUp7tWq5Y2h1COsOVVcoBF6ObpkhKYTMI",
  authDomain: "chat-95e00.firebaseapp.com",
  projectId: "chat-95e00",
  storageBucket: "chat-95e00.appspot.com",
  messagingSenderId: "683429892684",
  appId: "1:683429892684:web:522712c7287282e2fa5ae9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();