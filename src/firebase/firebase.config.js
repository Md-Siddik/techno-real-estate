// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHGReCM28kzwww3kk8LESuUAsiNy7I5c8",
  authDomain: "techno-real-estate.firebaseapp.com",
  projectId: "techno-real-estate",
  storageBucket: "techno-real-estate.appspot.com",
  messagingSenderId: "913386868421",
  appId: "1:913386868421:web:1d7e4fd1fdb90c8743eaac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;