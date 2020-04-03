import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

/*
 *
 * Go to your Firebase console and enable Google auth for your project.
 * 
 * To get firebaseConfig, click the gear icon and go to "Project Settings".
 * Under "General", go to "Your apps" and add a web app.
 * 
 */
var firebaseConfig = {
   // TODO: set me up!
};

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
export function signInWithGoogle() {
    auth.signInWithPopup(provider)
}
