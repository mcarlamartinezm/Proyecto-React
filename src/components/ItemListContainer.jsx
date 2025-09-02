import { useEffect, useState } from "react";
import { getPokemonList, getSinglePokemon } from "../asyncFunctions";

function ItemListContainer({ limit }) {
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    async function fetchPokemones() {
      const list = await getPokemonList(limit || 150);
      setPokemones(list);
    }
    fetchPokemones();
  }, [limit]);

  return (
    <div id="pokecontainer">
      <h1>PokeTienda</h1>
      <div id="pokecard">
        {pokemones.map((poke) => (
          <PokemonCard key={poke.name} name={poke.name}/>
        ))}
        </div>  
    </div>
  );
}

// Componente interno PokemonCard
function PokemonCard({ name }) {
  const [pokemon, setPokemon] = useState(null);
  const [showDesc, setShowDesc] = useState(false);

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
      {pokemon.sprite && <img src={pokemon.sprite} alt={pokemon.nombre} />}
      {/* Botón dentro de la card */}
            <button id="descripcion" onClick={() => setShowDesc(!showDesc)}>
              {showDesc ? "Ocultar descripción" : "Ver descripción"}
            </button>

            {showDesc && <p>{pokemon.descripcion}</p>}
          </div>
        );
      }

      {/* <div id="Description">
        <p><strong>Tipo:</strong> {pokemon.types.join(", ")}</p>
        <p><strong>Altura:</strong> {pokemon.height / 10} m</p>
        <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
        <p><strong>Habilidades:</strong> {pokemon.abilities.join(", ")}</p>
      </div>
      <button onClick={() => setShowDesc(!showDesc)}>
        {showDesc ? "Ocultar descripción" : "Ver descripción"}
      </button>

      {showDesc && <p>{pokemon.descripcion}</p>}

      <div>
        <strong>Stats:</strong>
        <ul>
          {pokemon.stats.map(s => (
            <li key={s.name}>{s.name}: {s.value}</li>
          ))}
        </ul>
      </div> */}


export default ItemListContainer;
