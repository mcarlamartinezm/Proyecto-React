function CartSidebar({ cartItems, isCartOpen, setIsCartOpen }) {
  const totalItems = cartItems.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={() => setIsCartOpen(false)}>x</button>
      <h2>Carrito</h2>
      {cartItems.length === 0 ? (
        <p>Carrito vacío</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                {item.sprite && <img src={item.sprite} alt={item.nombre} width={50} />}
                <span>{item.nombre} x{item.cantidad}</span>
              </li>
            ))}
          </ul>
          <p><strong>Total Pokémon:</strong> {totalItems}</p>
        </>
      )}
    </div>
  );
}

export default CartSidebar;
