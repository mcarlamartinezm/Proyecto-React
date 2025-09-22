import CartWidget from './CartWidget';
import { Link } from "react-router-dom";
import InicioBtn from './InicioBtn';

function Navbar({ totalItems, setIsCartOpen }) {
  return (
    <nav className="navbar">
      <InicioBtn />
      <ul className="nav-links">
        <li className='NavName'><Link to="/" >Home</Link></li>
        <li className='NavName'><Link to="/crianza" >Crianza</Link></li>
        <li className='NavName'><Link to="/pokemones" >Pokemones</Link></li>
        <li className='NavName'><Link to="/maestro" >Maestro</Link></li>
        <li className='NavName'><Link to="/contacto" >Contacto</Link></li>
      </ul>
      <CartWidget totalItems={totalItems} setIsCartOpen={setIsCartOpen} />
    </nav>
  );
}

export default Navbar;
