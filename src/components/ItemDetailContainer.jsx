import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSinglePokemon } from "../asyncFunctions";

function ItemDetailContainer({ addToCart }) {
  const { name } = useParams(); // nombre del Pokemon desde la URL
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getSinglePokemon(name);
      setPokemon(data);
    }
    fetchData();
  }, [name]);

  if (!pokemon) return <p>Poke Cargando... {name}...</p>;

  return (
    <div id="pokecontainer">
      <h1>{pokemon.nombre}</h1>
      {pokemon.sprite && <img src={pokemon.sprite} alt={pokemon.nombre} />}
      
      <p>{pokemon.descripcion}</p>

      <div>
        <strong>Tipo:</strong> {pokemon.types.join(", ")}<br />
        <strong>Altura:</strong> {pokemon.height / 10} m<br />
        <strong>Peso:</strong> {pokemon.weight / 10} kg<br />
        <strong>Habilidades:</strong> {pokemon.abilities.join(", ")}
      </div>

      <div>
        <strong>Stats:</strong>
        <ul>
          {pokemon.stats.map(s => (
            <li key={s.name}>{s.name}: {s.value}</li>
          ))}
        </ul>
      </div>

      {/* Botón + para agregar al carrito */}
      <button className="add-cart-btn" onClick={() => addToCart(pokemon)}>¡Atrápalo en la pokecompra!</button>
      
    </div>
  );
}

export default ItemDetailContainer;
