import { useEffect, useState } from "react";
import { getSinglePokemon } from "../asyncFunctions";
import { Link } from "react-router-dom";

function PokemonCard({ name, addToCart }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getSinglePokemon(name);
      setPokemon(data);
    }
    fetchData();
  }, [name]);

  if (!pokemon) return <p>Cargando {name}...</p>;

  return (
    <div className="pokecard">
      <h3>{pokemon.nombre}</h3>
      {pokemon.sprite && <img id="pokeimg<"src={pokemon.sprite} alt={pokemon.nombre} />}
      <p>{pokemon.descripcion}</p>

      <Link to={`/pokemon/${pokemon.nombre}`}>
        <button className="add-cart-btn">Pokedex</button>
      </Link>

      <button id="mas" onClick={() => addToCart(pokemon)}>+</button>
    </div>
  );
}

export default PokemonCard;
