import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDuyzI1RTfa59lhVQHXMZKEGw2cIrIRx7o",
    authDomain: "crwn-db-94bd2.firebaseapp.com",
    databaseURL: "https://crwn-db-94bd2.firebaseio.com",
    projectId: "crwn-db-94bd2",
    storageBucket: "crwn-db-94bd2.appspot.com",
    messagingSenderId: "471216119790",
    appId: "1:471216119790:web:77e6d6f2e3bbe3b852b8ff",
    measurementId: "G-M2D779F2T9"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;