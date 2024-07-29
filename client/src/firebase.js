// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-43b23.firebaseapp.com",
  projectId: "mern-blog-43b23",
  storageBucket: "mern-blog-43b23.appspot.com",
  messagingSenderId: "593891681634",
  appId: "1:593891681634:web:ceb7e2d19bcb6f07f7783b",
  measurementId: "G-0Y26KS2TY2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);