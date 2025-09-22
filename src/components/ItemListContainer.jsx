import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import ItemList from "./ItemList";

function ItemListContainer({ limit, addToCart, showSpecificPokemons = false }) {
  const [pokemones, setPokemones] = useState([]);
  const startPokemons = ["bulbasaur", "charmander", "squirtle", "pikachu", "vulpix", "jigglypuff", "machop", "slowpoke", "staryu", "magikarp"];

  useEffect(() => {
    async function fetchPokemones() {
      try {
        const q = query(collection(db, "pokemones"), orderBy("id", "asc"));
        const querySnapshot = await getDocs(q);
        let list = querySnapshot.docs.map(doc => doc.data());

        if (showSpecificPokemons) {
          // Filtrar solo los pokemones específicos de inicio
          list = list.filter(p => startPokemons.includes(p.nombre.toLowerCase()));
        } else if (limit) {
          list = list.slice(0, limit);
        }

        setPokemones(list);
      } catch (error) {
        console.error("Error al obtener lista de Pokémon de Firestore:", error);
      }
    }

    fetchPokemones();
  }, [limit, showSpecificPokemons]);

  return <ItemList pokemones={pokemones} addToCart={addToCart} />;
}

export default ItemListContainer;
