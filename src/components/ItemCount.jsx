import { useState } from "react";

function ItemCount({ stock = 10, initial = 1, onAdd }) {
  const [cantidad, setCantidad] = useState(initial);
  const [agregado, setAgregado] = useState(false);

  const incrementar = () => {
    if (cantidad < stock) setCantidad(cantidad + 1);
  };

  const decrementar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  const handleAdd = () => {
    onAdd(cantidad);
    setAgregado(true);
  };

  if (agregado) return <p>¡Agregado al carrito! ✅</p>;

  return (
    <div className="item-count">
      <div className="contador">
        <button onClick={decrementar}>-</button>
        <span>{cantidad}</span>
        <button onClick={incrementar}>+</button>
      </div>
      <button className="add-cart-btn" onClick={handleAdd}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
