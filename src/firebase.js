import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCw8x5kO-WVLWR3wiTYsaleyDZsI39XMLA",
  authDomain: "converse-e6d84.firebaseapp.com",
  projectId: "converse-e6d84",
  storageBucket: "converse-e6d84.appspot.com",
  messagingSenderId: "568272813737",
  appId: "1:568272813737:web:4981e3d57c588256e073b8",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db=getFirestore()
