import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";

function CheckFirestore() {
  const [pokemones, setPokemones] = useState([]); 

  useEffect(() => {
    async function fetchPokemones() {
      try {
        const q = query(collection(db, "pokemones"), orderBy("id", "asc"));
        const querySnapshot = await getDocs(q);
        const list = querySnapshot.docs.map(doc => doc.data());
        setPokemones(list); 
      } catch (error) {
        console.error("Error al obtener Pokémon de Firestore:", error);
      }
    }
    fetchPokemones();
  }, []);

  return null; 
}

export default CheckFirestore;
