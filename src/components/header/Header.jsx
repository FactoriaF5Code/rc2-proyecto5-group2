import "./header.css";

import { Link } from "react-router-dom";

import { Logo } from "../logo/logo";
import { Lupa } from "../../assets/lupa";
import fotoPerfil from "../../assets/imagen_perfil.png";

export const Header = () => {
  return (
    <nav className="navHeader">
      <div className="Navegador">
        <div className="logo">
          <Logo />
        </div>
        <div className="enlaces">
          <Link to="/inicio">INICIO</Link>
          <Link to="">SERIES TV</Link>
          <Link to="/peliculas">PELICULAS</Link>
          <Link to="">INFANTIL</Link>
          <Link to="">MI LISTA</Link>
        </div>
      </div>
      <div className="perfilBuscador">
        <button className="lupa">
          <Lupa />
        </button>
        <img src={fotoPerfil} alt="Foto de perfil" className="fotoPerfil" />
      </div>

      
    </nav>
  );
};
