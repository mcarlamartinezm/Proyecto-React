import ItemListContainer from '../components/ItemListContainer';

function Pokemones({ addToCart }) {
  return (
    <>
      <h1 className="titulo">Elije tus Pokemones</h1>
      <ItemListContainer addToCart={addToCart} />
    </>
  );
}

export default Pokemones;
