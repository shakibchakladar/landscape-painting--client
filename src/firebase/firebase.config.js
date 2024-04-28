// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBACht4sZVBZulVdl9iVBRUxXrO9Vu4Nw",
  authDomain: "craft-store-authentication.firebaseapp.com",
  projectId: "craft-store-authentication",
  storageBucket: "craft-store-authentication.appspot.com",
  messagingSenderId: "1091105528883",
  appId: "1:1091105528883:web:69e1814ace7d034db69746"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;