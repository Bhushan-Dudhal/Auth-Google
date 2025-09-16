// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "fir-c3fe6.firebaseapp.com",
    projectId: "fir-c3fe6",
    storageBucket: "fir-c3fe6.appspot.com",
    messagingSenderId: "916243525620",
    appId: "1:916243525620:web:ab1ed5165b1a5c8a1813a1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);