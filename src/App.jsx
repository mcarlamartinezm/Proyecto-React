import { useState, useEffect } from "react"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos"; 
import "aos/dist/aos.css"; 
import './App.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Crianza from './pages/Crianza';
import Pokemones from "./pages/Pokemones";
import Maestro from "./pages/Maestros";
import Contacto from "./pages/Contacto";
import Footer from "./pages/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import CartSidebar from './components/CartSidebar';
import CheckFirestore from "./components/CheckFirestore";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  //inicializar AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const addToCart = (pokemon) => {
    setCartItems(prev => {
      const index = prev.findIndex(item => item.nombre === pokemon.nombre);
      if (index >= 0) {
        const updated = [...prev];
        updated[index].cantidad += 1;
        return updated;
      } else {
        return [...prev, { ...pokemon, cantidad: 1 }];
      }
    });
  };

  const removeFromCart = (nombre) => {
    setCartItems(prev => prev.filter(item => item.nombre !== nombre));
  };

  const updateQuantity = (nombre, nuevaCantidad) => {
    setCartItems(prev =>
      prev.map(item =>
        item.nombre === nombre ? { ...item, cantidad: Math.max(1, nuevaCantidad) } : item
      )
    );
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <>
      <Router>
        <Navbar totalItems={totalItems} setIsCartOpen={setIsCartOpen} />
        <CartSidebar
          cartItems={cartItems}
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
          removeFromCart={removeFromCart}
          setCartItems={setCartItems}
        />
        <Routes>
          <Route path="/pokemon/:name" element={<ItemDetailContainer addToCart={addToCart} />} />
          <Route path="/category/:categoryName" element={<ItemListContainer addToCart={addToCart} />} />
          <Route path="/" element={<Inicio addToCart={addToCart} />} />
          <Route path="/crianza" element={<Crianza />} />
          <Route path="/pokemones" element={<Pokemones addToCart={addToCart} />} />
          <Route path="/maestro" element={<Maestro />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
        </Routes>
      </Router>
      <CheckFirestore />
      <Footer />
      <ToastContainer 
            position="top-center" 
            autoClose={3000} 
            hideProgressBar={false} 
            newestOnTop={false} 
            closeOnClick 
            rtl={false} 
            pauseOnFocusLoss 
            draggable 
            pauseOnHover
            toastClassName={({ type }) => 
              type === "success" ? "toast-success" : "toast-error"
            }
          />
    </>
  );
}

export default App;
