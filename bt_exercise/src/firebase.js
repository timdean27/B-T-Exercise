// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQxW3Fwl2l5Ae2im8w1Lq1kkStizS9bJw",
  authDomain: "b-t-exercise.firebaseapp.com",
  projectId: "b-t-exercise",
  storageBucket: "b-t-exercise.appspot.com",
  messagingSenderId: "33184583742",
  appId: "1:33184583742:web:7775529a9f60f0e84f016f",
  measurementId: "G-9NY4VRM4EE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { app, analytics, GoogleAuthProvider };