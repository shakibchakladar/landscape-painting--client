import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyBhvVdZmMvfBlgCmz9IijWkECTpIuhf0",
  authDomain: "craft-store-auth.firebaseapp.com",
  projectId: "craft-store-auth",
  storageBucket: "craft-store-auth.appspot.com",
  messagingSenderId: "500106890832",
  appId: "1:500106890832:web:592db4ebb212330d738b55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;