// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyClCC9wbqlXALnfsSiBjrryhJHWNoDtVO0",
    authDomain: "ecommerce-yanacon.firebaseapp.com",
    projectId: "ecommerce-yanacon",
    storageBucket: "ecommerce-yanacon.appspot.com",
    messagingSenderId: "339660601311",
    appId: "1:339660601311:web:d567ffcf11bff16669766a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app