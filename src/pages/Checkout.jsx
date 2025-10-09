import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Checkout() {
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];
  const totalPrice = location.state?.totalPrice || 0;

  //----------------------------- Confirmar compra
  const handleSubmit = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      toast("Tu carrito está vacío 🛒", {
        className: "toast-success",
        progressClassName: "toast-progress",
        closeOnClick: true,
        draggable: true
      });
      return;
    }

    toast("Rediriguiendo al sistema de pago, espera un momento...", {
      className: "toast-success",
      progressClassName: "toast-progress",
      closeOnClick: true,
      draggable: true
    });
  };

  return (
    <div className="contact-container">
      <h1>Finalizar compra</h1>
        <form onSubmit={handleSubmit} className="contactform">
        <h3>Completa tus datos</h3>
        <div>
            <label>
            Nombre:
            <input type="text" required />
            </label>
            <label>
            Apellidos:
            <input type="text" required />
            </label>
            <label>
            Rut:
            <input type="text" required />
            </label>
            <label>
            Email:
            <input type="email" required />
            </label>
            <label>
            Dirección:
            <input type="text" required />
            </label>
            <label>
            Comuna:
            <input type="text" required />
            </label>
        </div>

        <h3>Resumen del carrito:</h3>
        {cartItems.length === 0 ? (
          <p>No hay productos en el carrito</p>
        ) : (
          <ul>  {cartItems.map((item, index) => (
            <li key={index}>
            {/* Imagen del Pokémon */}
            {item.sprite && (
                <img
                src={item.sprite}
                alt={item.nombre}
                className="cart-img"
                />
            )}
            {item.nombre} x{item.cantidad} = ${item.precio * item.cantidad}
            </li>
            ))}
            </ul>
        )}

        <p><strong>Total: ${totalPrice}</strong></p>
        <button type="submit" className="contactbutton">
          Confirmar compra
        </button>
      </form>

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
