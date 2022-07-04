import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNkmiIFJ7mB_7g1FQYVHlXYgHbuY6PBiM",
  authDomain: "react-contact-curd.firebaseapp.com",
  databaseURL: "https://react-contact-curd-default-rtdb.firebaseio.com",
  projectId: "react-contact-curd",
  storageBucket: "react-contact-curd.appspot.com",
  messagingSenderId: "724764270481",
  appId: "1:724764270481:web:6b31ee4ed916fb0de54430"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();
