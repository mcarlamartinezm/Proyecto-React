import { useEffect, useState } from "react";
import { getPokemonList } from "../asyncFunctions";
import PokemonCard from "./PokemonCard";

function ItemListContainer({ limit, addToCart }) {
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    async function fetchPokemones() {
      const list = await getPokemonList(limit || 150);
      setPokemones(list);
    }
    fetchPokemones();
  }, [limit]);

  return (
    <div id="cardcontainer">
      
        {pokemones.map(poke => (
          <PokemonCard key={poke.name} name={poke.name} addToCart={addToCart} />
        ))}
      
    </div>
  );
}

export default ItemListContainer;
