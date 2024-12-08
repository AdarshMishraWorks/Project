// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAw36njMkK3smneixm2IdkhP2BE3Ht7BgM",
  authDomain: "cloud-project-54676.firebaseapp.com",
  projectId: "cloud-project-54676",
  storageBucket: "cloud-project-54676.firebasestorage.app",
  messagingSenderId: "525776817488",
  appId: "1:525776817488:web:719897611c0acd01107055",
  measurementId: "G-9PWLBJH718"

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
