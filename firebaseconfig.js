// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqo83GIMEArMTm00KO2f1_o9lJfLuraz0",
  authDomain: "littleninjask.firebaseapp.com",
  projectId: "littleninjask",
  storageBucket: "littleninjask.appspot.com",
  messagingSenderId: "557812723565",
  appId: "1:557812723565:web:b4149236dd810a0d6ff464",
  measurementId: "G-CYCXF0142X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;