// ItemListDestacados.jsx
import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import ItemList from "./ItemList";

const destacados = ["Bulbasaur","Charmander","Squirtle","Pikachu","Vulpix","Jigglypuff","Machop","Slowpoke","Staryu","Magikarp","Cubone","Dratini"];

function ItemListDestacados({ addToCart }) {
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    async function fetchPokemones() {
      try {
        const q = query(collection(db, "pokemones"), orderBy("id", "asc"));
        const querySnapshot = await getDocs(q);
        const list = querySnapshot.docs
          .map(doc => doc.data())
          .filter(p => destacados.includes(p.nombre));
        setPokemones(list);
      } catch (error) {
        console.error("Error al obtener Pokémon destacados:", error);
      }
    }
    fetchPokemones();
  }, []);

  return <ItemList pokemones={pokemones} addToCart={addToCart} />;
}

export default ItemListDestacados;
