import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAsSYxI_84ju5tfu6d7LQ7YzIdvj7hCoDA",
    authDomain: "camelot-89b7a.firebaseapp.com",
    projectId: "camelot-89b7a",
    storageBucket: "camelot-89b7a.appspot.com",
    messagingSenderId: "450975261719",
    appId: "1:450975261719:web:7a25e400dadcabbe24e852"
  };


firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

