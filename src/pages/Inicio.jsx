import ItemListDestacados from "../components/ItemListDestacados";
function Inicio({ addToCart }) {
  return (
    <>
      <h1 className="titulo">Poketienda</h1> 
      <p id="bienve-text">Encuentra los mejores Pokemones de compañía.<br /> Puedes ver en la pokedex las caracteristicas de cada uno y agregar al carrito de compras a tu nuevo compañero.
     <br /> ¡Para que te acompañen en la aventura!</p>
      <ItemListDestacados addToCart={addToCart} />
    </>
  );
}

export default Inicio;
