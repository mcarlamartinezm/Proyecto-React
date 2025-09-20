// Importar funciones necesarias de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // 🔹 agregamos Firestore

// Configuración de tu app
const firebaseConfig = {
  apiKey: "AIzaSyB6p7eiz6dn7F359RrN8Pd9Ds2NrZ22uts",
  authDomain: "react-pokemon-2025.firebaseapp.com",
  projectId: "react-pokemon-2025",
  storageBucket: "react-pokemon-2025.firebasestorage.app",
  messagingSenderId: "962373959733",
  appId: "1:962373959733:web:ce90a22681978771efb17c"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// 🔹 Exportamos Firestore para usarlo en React
export const db = getFirestore(app);
