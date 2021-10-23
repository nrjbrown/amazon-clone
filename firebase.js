import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAkx-cIUGPRl2ecZy-kmit_KMDM-ndqRgc",
  authDomain: "auth-79ff5.firebaseapp.com",
  projectId: "auth-79ff5",
  storageBucket: "auth-79ff5.appspot.com",
  messagingSenderId: "1010577959652",
  appId: "1:1010577959652:web:dc97d0c09f0a64d097daf1"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
