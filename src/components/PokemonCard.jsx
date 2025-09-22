import { Link } from "react-router-dom";

function PokemonCard({ pokemon, addToCart }) {
  if (!pokemon) return <p>Cargando...</p>;

  return (
    <div className="pokecard">
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
