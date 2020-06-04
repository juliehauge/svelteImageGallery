import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

var firebaseConfig = {
  apiKey: "AIzaSyDFMf3C-uslRRIM-qvqezyMqrmQsrcQbF4",
  authDomain: "hovedprosjekt-c29b6.firebaseapp.com",
  databaseURL: "https://hovedprosjekt-c29b6.firebaseio.com",
  projectId: "hovedprosjekt-c29b6",
  storageBucket: "hovedprosjekt-c29b6.appspot.com",
  messagingSenderId: "85006241981",
  appId: "1:85006241981:web:7498bce62fb4a0756f27d4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const db = firebase.firestore()
export const storage = firebase.storage()