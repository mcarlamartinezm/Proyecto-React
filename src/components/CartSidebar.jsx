import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      if (cartItems.length === 0) {
        toast("El carrito está vacío. No se puede pagar.", {
          className: "toast-success",       // usamos tu clase dorada
          progressClassName: "toast-progress", // barra negra
          closeOnClick: true,
          draggable: true
        });
        return;
      }

      toast("Redireccionando al sistema de pago", {
        className: "toast-success",
        progressClassName: "toast-progress",
        closeOnClick: true,
        draggable: true
      });
    };


  return (
    <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={() => setIsCartOpen(false)}>x</button>
      <h2>PokeCarrito</h2>
      {cartItems.length === 0 ? (
        <p className='bienve-text'>Carrito vacío</p>
      ) : (
        <>
         <ul className="cart-items">
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              {/* Columna izquierda: imagen */}
              {item.sprite && <img src={item.sprite} alt={item.nombre} className="cart-img" />}

              {/* Columna derecha: info */}
              <div className="cart-item-info">
                <div className="cart-item-header">
                  <strong>{item.nombre}</strong>
                  <div className="cart-item-buttons">
                    <button className="white-btn" onClick={() => decrement(item.nombre)}>-</button>
                    <span>{item.cantidad}</span>
                    <button className="white-btn" onClick={() => increment(item.nombre)}>+</button>
                    <button className="white-btn" onClick={() => removeFromCart(item.nombre)}>x</button>
                  </div>
                </div>

                {/* Precios debajo */}
                <div className="cart-item-prices">
                  <span>Precio: ${item.precio}</span>
                  <span>Subtotal: ${item.precio * item.cantidad}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>

          <p><strong>Total Pokémon:</strong> {totalItems}</p>
          <p><strong>Total a pagar:</strong> ${totalPrice}</p>
          <button className="pay-cart-btn" onClick={handlePay}>Ir a pagar</button>
        </>
      )}

      {/* Toastify container */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
      />

    </div>
  );
}

export default CartSidebar;
