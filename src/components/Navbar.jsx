import CartWidget from './CartWidget'
import logo from '../assets/logo 1.avif'

function Navbar () {
    return(
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: 'gold', height: 40 }}>          
          <div>
            <img src={logo} alt="logo" style={{ height: '100px' }} />
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem'}}>
            <li id='NavName'><a href="/" >Inicio</a></li>
            <li id='NavName'><a href="/pages/crianza" >Crianza</a></li>
            <li id='NavName'><a href="/pages/Pokemones" >Pokemones</a></li>
            <li id='NavName'><a href="/pages/Maestro" >Maestro</a></li>
            <li id='NavName'><a href="/pages/Contacto" >Contacto</a></li>
          </ul>
          <CartWidget />
    </nav>

    )
}

export default Navbar;