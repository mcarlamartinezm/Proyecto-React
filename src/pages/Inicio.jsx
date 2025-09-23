import ItemListDestacados from "../components/ItemListDestacados";
function Inicio({ addToCart }) {
  return (
    <>
      <h1 className="titulo">Poketienda</h1> 
      <p className="bienve-text">Encuentra los mejores Pokemones de compañía.<br /> Puedes ver en la pokedex las caracteristicas de cada uno y agregar al carrito de compras a tu nuevo compañero.
     <br /> Te sugerimos los pokemones más destacados, para comenzar tu travesía.</p>
      <ItemListDestacados addToCart={addToCart} />
    </>
  );
}

export default Inicio;
