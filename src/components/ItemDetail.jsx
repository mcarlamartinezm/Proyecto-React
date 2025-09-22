import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonByName } from "../firebaseFunctions"; // tu función para traer un Pokémon de Firestore
import ItemCount from "./ItemCount";

function ItemDetailContainer({ addToCart }) {
  const { name } = useParams(); 
  const [pokemon, setPokemon] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getPokemonByName(name);
        setPokemon(data);
      } catch (error) {
        console.error("Error al cargar Pokémon:", error);
      }
    }
    fetchData();
  }, [name]);

  const handleAddToCart = (cantidad) => {
    addToCart({ ...pokemon, cantidad });
    setAddedToCart(true);
  };

  if (!pokemon) return <p>Cargando {name}...</p>;

  return (
    <div id="pokecontainer">
      <h1>{pokemon.nombre}</h1>
      {pokemon.sprite && <img className="poke-img" src={pokemon.sprite} alt={pokemon.nombre} />}
      <p>{pokemon.descripcion}</p>

      <div>
        <strong>Tipo:</strong> {pokemon.types.join(", ")}<br />
        <strong>Altura:</strong> {pokemon.height / 10} m<br />
        <strong>Peso:</strong> {pokemon.weight / 10} kg<br />
        <strong>Habilidades:</strong> {pokemon.abilities.join(", ")}
      </div>

      <div className="stats-box">
        <h3>Stats</h3>
        <ul>
          {pokemon.stats.map(s => (
            <li key={s.name}>{s.name}: {s.value}</li>
          ))}
        </ul>
      </div>

      {/* Renderizamos ItemCount solo si no se ha agregado al carrito */}
      {!addedToCart && (
        <ItemCount stock={pokemon.stock || 99} initial={1} onAdd={handleAddToCart} />
      )}
    </div>
  );
}

export default ItemDetailContainer;
