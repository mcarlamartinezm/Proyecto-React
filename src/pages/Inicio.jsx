import ItemListContainer from '../components/ItemListContainer';

function Inicio({ addToCart }) {
  return (
    <>
      <h1 className="titulo">Poketienda</h1> 
      <ItemListContainer limit={9} addToCart={addToCart} />
    </>
  );
}

export default Inicio;
