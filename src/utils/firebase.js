// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtQgFzEPTtnIsFG1CHAq2pGWIV7mbPug4",
  authDomain: "netflixgpt-bd59c.firebaseapp.com",
  projectId: "netflixgpt-bd59c",
  storageBucket: "netflixgpt-bd59c.appspot.com",
  messagingSenderId: "120223008172",
  appId: "1:120223008172:web:6bb5296a8fa8988b17a609",
  measurementId: "G-HW1E9356N0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();