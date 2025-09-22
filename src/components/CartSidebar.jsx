import { useState } from "react";

function CartSidebar({ cartItems, isCartOpen, setIsCartOpen, removeFromCart, setCartItems }) {

  //------------------------- Calculo total general
  const totalItems = cartItems.reduce((acc, item) => acc + item.cantidad, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.cantidad * item.precio, 0);

  //------------------------ Funciones para aumentar o disminuir cantidad
  const increment = (nombre) => {
    setCartItems(prev => prev.map(item =>
      item.nombre === nombre
        ? { ...item, cantidad: item.cantidad + 1 }
        : item
    ));
  };

  const decrement = (nombre) => {
    setCartItems(prev => prev.map(item =>
      item.nombre === nombre
        ? { ...item, cantidad: item.cantidad > 1 ? item.cantidad - 1 : 1 }
        : item
    ));
  };

  //----------------------------- Simular pago
  const handlePay = () => {
    if(cartItems.length === 0){
      alert("El carrito está vacío. No se puede pagar.");
      return;
    }
    alert("Redirigiendo a la pasarela de pago... 💲");

  };


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
                <div className="cart-item-info">
                  <span><strong>{item.nombre}</strong></span>
                  <span>Precio: ${item.precio}</span>
                  <span>Subtotal: ${item.precio * item.cantidad}</span>
                  <div className="cart-item-buttons">
                    <button className="white-btn" onClick={() => decrement(item.nombre)}>-</button>
                    <span>{item.cantidad}</span>
                    <button className="white-btn" onClick={() => increment(item.nombre)}>+</button>
                    <button className="white-btn" onClick={() => removeFromCart(item.nombre)}>x</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <p><strong>Total Pokémon:</strong> {totalItems}</p>
          <p><strong>Total a pagar:</strong> ${totalPrice}</p>
          <button className="pay-cart-btn" onClick={handlePay}>Pagar mis pokemones 💲</button>
        </>
      )}
    </div>
  );
}

export default CartSidebar;
