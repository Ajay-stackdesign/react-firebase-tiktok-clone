// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCBdpXnE4DsxZ0tXEaCeTGa-19cwPcTIN8",
    authDomain: "tik-tok-clone-3509c.firebaseapp.com",
    projectId: "tik-tok-clone-3509c",
    storageBucket: "tik-tok-clone-3509c.appspot.com",
    messagingSenderId: "394725646685",
    appId: "1:394725646685:web:33a8b37aa72cd1869648b4",
    measurementId: "G-X9S7LK4F43"
  };

const firebaseApp = 
firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

export default db;