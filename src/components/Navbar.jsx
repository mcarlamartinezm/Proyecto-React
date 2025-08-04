import CartWidget from './CartWidget'
import logo from '../assets/logo 1.avif'

function Navbar () {
    return(
         <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: 'gold', height: 40 }}>
      <div>
        <img src={logo} alt="logo" style={{ height: '100px' }} />
      </div>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem'}}>
        <li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Inicio</a></li>
        <li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Crianza</a></li>
        <li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Pokemones</a></li>
        <li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Maestro</a></li>
        <li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>

    )
}

export default Navbar;