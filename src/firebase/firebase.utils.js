import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAxUES-1RZv_qP-kAY-2QJmqjSrzlHwrXo",
  authDomain: "ecommerce-dbase.firebaseapp.com",
  projectId: "ecommerce-dbase",
  storageBucket: "ecommerce-dbase.appspot.com",
  messagingSenderId: "883449466123",
  appId: "1:883449466123:web:88f08068b1bf890345e60e",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
