import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyArWaVOvN2lz8CWTvB_sUx1exOxyFhNccs",
    authDomain: "react-journal-465d9.firebaseapp.com",
    projectId: "react-journal-465d9",
    storageBucket: "react-journal-465d9.appspot.com",
    messagingSenderId: "1090618684166",
    appId: "1:1090618684166:web:364a265d6244fab7b06487"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {
    db, 
    googleAuthProvider,
    firebase
}