import logo from '../assets/logo.avif';

function CartWidget({ totalItems, setIsCartOpen }) {
  return (
    <div className="cart-widget" onClick={() => setIsCartOpen(true)}>
      <span>
         <img src={logo} alt="logo" className="logo2"/>
        </span>
      <span className="cart-count">{totalItems}</span>
    </div>
  );
}

export default CartWidget;
