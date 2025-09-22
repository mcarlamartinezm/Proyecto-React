import PokemonCard from "./PokemonCard";

function ItemList({ pokemones, addToCart }) {
  return (
    <div id="cardcontainer">
      {pokemones.map(pokemon => (
        <PokemonCard
          key={pokemon.nombre}
          pokemon={pokemon}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default ItemList;
