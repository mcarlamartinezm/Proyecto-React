import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "tu-apiKey",
  authDomain: "react-pokemon-2025.firebaseapp.com",
  projectId: "react-pokemon-2025",
  storageBucket: "react-pokemon-2025.appspot.com",
  messagingSenderId: "tu-messagingSenderId",
  appId: "tu-appId"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
