import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDqtykqx8vUiJ47Rz9NosCf-7glOEr9OuQ",
  authDomain: "npgc-14519.firebaseapp.com",
  databaseURL: "https://npgc-14519.firebaseio.com",
  projectId: "npgc-14519",
  storageBucket: "npgc-14519.appspot.com",
  messagingSenderId: "680912651143",
  appId: "1:680912651143:web:677cee5ed08710217c4922",
  measurementId: "G-94MJXHR7PB",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user, error.message");
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
