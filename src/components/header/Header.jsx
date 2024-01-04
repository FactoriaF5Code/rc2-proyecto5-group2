import "./header.css";
import logotipo from "../../assets/logo_reactflix.svg";

export const Header = () => {
  return (
    <nav className="navHeader">
      <div className="Navegador">
        <img src={logotipo} alt="logotipo" className="logo" />
        <a href="">Inicio</a>
        <a href="">Series Tv</a>
        <a href="">Peliculas</a>
        <a href="">Infantil</a>
        <a href="">Mi lista</a>
      </div>
      <div className="perfilBuscador">
        <button>Lupa</button>
        <img src="" alt="Foto de perfil" className="fotoPerfil" />
      </div>
    </nav>
  );
};
