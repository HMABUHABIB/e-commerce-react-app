import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCyxxKSMOKqSapzmaD3iZdLYlbpeeFMaAY",
  authDomain: "e-commerce-db-4d9b9.firebaseapp.com",
  projectId: "e-commerce-db-4d9b9",
  storageBucket: "e-commerce-db-4d9b9.appspot.com",
  messagingSenderId: "446485377034",
  appId: "1:446485377034:web:b496626228f7446a54eff3",
  measurementId: "G-6KBVKEW09E",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
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
      console.log("error creating user", error.message);
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
