import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDnPhnFMgv8BtWKhdrR3QvPGw_wXzGNGLI",
  authDomain: "whatsapp-2-9f3f9.firebaseapp.com",
  projectId: "whatsapp-2-9f3f9",
  storageBucket: "whatsapp-2-9f3f9.appspot.com",
  messagingSenderId: "751191528643",
  appId: "1:751191528643:web:b303722cbe8c63045fbe76",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
