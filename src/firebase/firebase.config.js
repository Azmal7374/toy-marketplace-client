// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl4YDjENZHwQoow_MPkge-Noq1HHMooe4",
  authDomain: "toy-marketplace-client-16a3d.firebaseapp.com",
  projectId: "toy-marketplace-client-16a3d",
  storageBucket: "toy-marketplace-client-16a3d.appspot.com",
  messagingSenderId: "663345957774",
  appId: "1:663345957774:web:3cee781ce61cde5b3632df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;