import ItemListContainer from '../components/ItemListContainer';

function Pokemones({ addToCart }) {
  return (
    <>
      <h1 className="titulo">Elije tus Pokemones</h1>
      <p className='bienve-text'>Son solo 150 o más que ver, escoge a tu amigo de aventura.</p>
      <ItemListContainer addToCart={addToCart} />
    </>
  );
}

export default Pokemones;
