import { Link } from "react-router-dom";
import "aos/dist/aos.css";

function PokemonCard({ pokemon, addToCart }) {
  if (!pokemon) return <p>Cargando...</p>;

  return (
    <div
      className="pokecard"
      data-aos="fade-up"        // animación
      data-aos-duration="1000"  // duración en ms
      data-aos-delay="100"     // retardo opcional
    >
      <h3>{pokemon.nombre}</h3>

      {pokemon.sprite && (
        <img
          className="pokemon-img"
          src={pokemon.sprite}
          alt={pokemon.nombre}
        />
      )}

      <p>{pokemon.descripcion}</p>

      <Link to={`/pokemon/${pokemon.nombre}`}>
        <button className="add-cart-btn">Pokedex</button>
      </Link>

      <button
        className="add-cart-btn"
        onClick={() => addToCart({ ...pokemon, cantidad: 1 })}
      >
        +
      </button>
    </div>
  );
}

export default PokemonCard;
