import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";

function CheckFirestore() {
  const [pokemones, setPokemones] = useState([]); // <--- Muy importante

  useEffect(() => {
    async function fetchPokemones() {
      try {
        const q = query(collection(db, "pokemones"), orderBy("id", "asc"));
        const querySnapshot = await getDocs(q);
        const list = querySnapshot.docs.map(doc => doc.data());
        setPokemones(list); // <--- Esto ahora sí funciona
      } catch (error) {
        console.error("Error al obtener Pokémon de Firestore:", error);
      }
    }
    fetchPokemones();
  }, []);

  return null; // <-- si solo lo usas para debug, o puedes renderizar algo
}

export default CheckFirestore;
