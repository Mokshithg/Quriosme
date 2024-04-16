import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDZNdHN1cU3DB5bBTc3K69zu4Rn14JoT7w",
  authDomain: "quriosme-397f8.firebaseapp.com",
  projectId: "quriosme-397f8",
  storageBucket: "quriosme-397f8.appspot.com",
  messagingSenderId: "239287720359",
  appId: "1:239287720359:web:50104d3630cd72dcf23e82"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// export const db = getFirestore(app);