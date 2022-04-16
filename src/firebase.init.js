// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbA3tp3Wer-ZPJWcYzvH8MhEsA1eSCJF4",
    authDomain: "ema-john-simple-6900b.firebaseapp.com",
    projectId: "ema-john-simple-6900b",
    storageBucket: "ema-john-simple-6900b.appspot.com",
    messagingSenderId: "1014161441574",
    appId: "1:1014161441574:web:2ee159cfa487d9c21ff7e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)