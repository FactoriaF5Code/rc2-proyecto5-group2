import "./header.css";
import logotipo from "../../assets/logo_reactflix.svg";
import { Enlace } from "./enlace";


export const Header = () => {
  return (
    <nav className="navegador">
      <img src={logotipo} alt="logotipo" className="logo" />
      <Enlace />
    </nav>
  );
};