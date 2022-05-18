// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDE8GzI3ulMtl0DNiYy2UG13_AOIVVvrXA",
    authDomain: "react-todo-a1f81.firebaseapp.com",
    projectId: "react-todo-a1f81",
    storageBucket: "react-todo-a1f81.appspot.com",
    messagingSenderId: "265908005733",
    appId: "1:265908005733:web:c42ba8eeb28bb159c0cf8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;