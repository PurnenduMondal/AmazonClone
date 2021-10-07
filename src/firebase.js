import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import "firebase/compat/firestore"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCutSVqJQoyMZzMEwAmo8gXcGHmiw-WCrY",
  authDomain: "clone-513e7.firebaseapp.com",
  projectId: "clone-513e7",
  storageBucket: "clone-513e7.appspot.com",
  messagingSenderId: "248801855402",
  appId: "1:248801855402:web:dd26403948fb08db610dd3",
  measurementId: "G-S7PNDZJ1VY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()
export { auth, provider }
export default db