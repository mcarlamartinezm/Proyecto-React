import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import Inicio from './pages/Inicio'
import Crianza from'./pages/Crianza'
import Pokemones from "./pages/Pokemones"
import Maestro from "./pages/Maestros"
import Contacto from "./pages/Contacto"
import Footer from "./pages/Footer"

function App() {
  
  return (
    <>
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/pages/Crianza" element={<Crianza/>}/>
          <Route path="/pages/Pokemones" element={<Pokemones/>}/>
          <Route path="/pages/Maestro" element={<Maestro/>}/>
          <Route path="/pages/Contacto" element={<Contacto/>}/>
        </Routes>
     </BrowserRouter>
     <Footer />
     
    </>
  )
}



export default App
