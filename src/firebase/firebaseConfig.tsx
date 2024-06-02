// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBG_UfH52T95bSxaGtDvqPlIcQ_khtqAn4",
    authDomain: "instills.firebaseapp.com",
    projectId: "instills",
    storageBucket: "instills.appspot.com",
    messagingSenderId: "504106292748",
    appId: "1:504106292748:web:5001696a1b36c52ce60029",
    measurementId: "G-DWVF9ZM1NG"
  };
// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-undef
export const db = getFirestore(app);

// example uid
export const UID = 'max'
