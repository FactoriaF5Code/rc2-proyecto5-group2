import "./header.css";
import { Logo } from "../logo/logo";
import { Lupa } from "../../assets/lupa"
import fotoPerfil from "../../assets/imagen_perfil.png"

export const Header = () => {
  return (
    <nav className="navHeader">
      <div className="Navegador">
        <div className="logo">
          <Logo />
        </div>
        <a href="">INICIO</a>
        <a href="">SERIES TV</a>
        <a href="">PELICULAS</a>
        <a href="">INFANTIL</a>
        <a href="">MI LISTA</a>
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
