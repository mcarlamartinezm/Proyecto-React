import { Link } from "react-router-dom";
import logo1 from "../assets/logo1.avif"; 

const InicioBtn = () => {
  return (
    <Link to="/">
      <img 
        src={logo1} 
        alt="Logo tienda" 
        className="logo" 
      />
    </Link>
  );
};

export default InicioBtn;
