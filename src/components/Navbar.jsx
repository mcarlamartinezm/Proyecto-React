import CartWidget from './CartWidget';
import logo from '../assets/logo 1.avif';
import { Link } from "react-router-dom";

function Navbar({ totalItems, setIsCartOpen }) {
  return (
    <nav className="navbar">
      <div>
        <img src={logo} alt="logo" className="logo"/>
      </div>
      <ul className="nav-links">
        <li id='NavName'><Link to="/" >Inicio</Link></li>
        <li id='NavName'><Link to="/crianza" >Crianza</Link></li>
        <li id='NavName'><Link to="/pokemones" >Pokemones</Link></li>
        <li id='NavName'><Link to="/maestro" >Maestro</Link></li>
        <li id='NavName'><Link to="/contacto" >Contacto</Link></li>
      </ul>
      <CartWidget totalItems={totalItems} setIsCartOpen={setIsCartOpen} />
    </nav>
  );
}

export default Navbar;
