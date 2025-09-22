import ItemListDestacados from "../components/ItemListDestacados";
function Inicio({ addToCart }) {
  return (
    <>
      <h1 className="titulo">Poketienda</h1> 
      <ItemListDestacados addToCart={addToCart} />
    </>
  );
}

export default Inicio;
