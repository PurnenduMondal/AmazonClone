import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import "firebase/compat/firestore"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCutSVqJQoyMZzMEwAfasdfmo8gXcGHmiw-WCrY",
  authDomain: "clone-5dsf1afaf3e7.firebaseapp.com",
  projectId: "clone-513fasdfe7",
  storageBucket: "clone-afadf513e7.appspot.com",
  messagingSenderId: "2488018asdff55402",
  appId: "1:248801855402:web:dd26403948fb08db610ddfasasfd3",
  measurementId: "hhjfjNDZfaasdfJ1VY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()
export { auth, provider }
export default db
