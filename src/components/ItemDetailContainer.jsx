import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

function ItemDetailContainer({ addToCart }) {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const docRef = doc(db, "pokemones", name);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setPokemon(docSnap.data());
        } else {
          console.log("No se encontró el Pokémon en Firestore");
        }
      } catch (error) {
        console.error("Error al obtener Pokémon de Firestore:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [name]);

  if (loading) return <p>Cargando {name}...</p>;
  if (!pokemon) return <p>Pokémon no encontrado.</p>;

  return (
    <div id="pokecontainer">
      <h1>{pokemon.nombre}</h1>
      {pokemon.sprite && (
        <img src={pokemon.sprite} alt={pokemon.nombre} className="poke-img" />
      )}
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
          {pokemon.stats.map((s) => (
            <li key={s.name}>
              {s.name}: {s.value}
            </li>
          ))}
        </ul>
      </div>

      <button className="add-cart-btn" onClick={() => addToCart({ ...pokemon, cantidad: 1 })}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemDetailContainer;
