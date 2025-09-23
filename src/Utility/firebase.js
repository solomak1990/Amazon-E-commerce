import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkZQ9v4xUgJQ4nwLAD4n9-ZQxsNlQZkOA",
  authDomain: "clone-d825b.firebaseapp.com",
  projectId: "clone-d825b",
  storageBucket: "clone-d825b.firebasestorage.app",
  messagingSenderId: "867925935053",
  appId: "1:867925935053:web:20ddcf2cbfbd56164cba84",
  measurementId: "G-188CNDSVF8",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();



