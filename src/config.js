import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDPrciCXrDV8xXbxpllMmEsBjvnYxbNzjI",
  authDomain: "auth-7620b.firebaseapp.com",
  projectId: "auth-7620b",
  storageBucket: "auth-7620b.appspot.com",
  messagingSenderId: "753361293262",
  appId: "1:753361293262:web:594fe0e89657e2caf3659f",
  measurementId: "G-SJHD6FH7QY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider}