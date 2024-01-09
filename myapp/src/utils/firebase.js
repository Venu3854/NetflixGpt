// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQI8HKsMPZGBvCFrhKDU5PcDnZPLzWbew",
  authDomain: "netflixgpt-5e3f5.firebaseapp.com",
  projectId: "netflixgpt-5e3f5",
  storageBucket: "netflixgpt-5e3f5.appspot.com",
  messagingSenderId: "453156479383",
  appId: "1:453156479383:web:4004edd422e8c8ad0d64d2",
  measurementId: "G-Z0KJXM4XN6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
