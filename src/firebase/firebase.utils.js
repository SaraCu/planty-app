import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCUg8wpskZJRCIgqdA_w18SySJ4P5Nqqoc",
  authDomain: "planty-db.firebaseapp.com",
  databaseURL: "https://planty-db.firebaseio.com",
  projectId: "planty-db",
  storageBucket: "planty-db.appspot.com",
  messagingSenderId: "416332804650",
  appId: "1:416332804650:web:b13208e7bdafaf482ac953",
  measurementId: "G-RMRLPYN09T",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
