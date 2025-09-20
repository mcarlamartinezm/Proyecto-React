import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function CheckFirestore() {
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    const fetchPokemones = async () => {
      try {
        const snapshot = await getDocs(collection(db, "pokemones"));
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPokemones(data);
        console.log("Pokémon en Firestore:", data);
      } catch (e) {
        console.error("Error leyendo Firestore:", e);
      }
    };

    fetchPokemones();
  }, []);

  return (
    <div>
      <h2>Pokémon en Firestore:</h2>
      <ul>
        {pokemones.map(p => (
          <li key={p.id}>{p.name} - {p.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default CheckFirestore;
