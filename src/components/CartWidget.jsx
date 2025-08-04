import logo from '../assets/logo.avif'


function CartWidget() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
    <img src={logo} alt="logo" style={{ height: '30px' }} />
      <span style={{ marginLeft: '0.5rem' }}>6</span>
    </div>
  );
}

export default CartWidget;
