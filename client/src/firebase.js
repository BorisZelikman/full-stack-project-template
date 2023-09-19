// Import the functions you need from the SDKs you need
//import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { doc, setDoc, addDoc } from "firebase/firestore"; 

//import 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDo1wdHC2eknHW8CEX4SNZq-l4ySkogMbo",
    authDomain: "elevation-fitness.firebaseapp.com",
    databaseURL: "https://elevation-fitness-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "elevation-fitness",
    storageBucket: "elevation-fitness.appspot.com",
    messagingSenderId: "970069320810",
    appId: "1:970069320810:web:922f1b0ff34bdab8315613",
    measurementId: "G-0C1X8QZMNR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
//provider.setCustomParameters({ prompt: 'select_account' });
await setDoc(doc(db, "notes", "new-note-id"), {
    task: "test note",
    done: false
});