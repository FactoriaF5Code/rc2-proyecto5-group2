// src/components/Logo.jsx
import './logo.css';
import LogoSvg from '../assets/logo_reactflix.svg';

const Logo = () => {
  return <div className="logo"><img src={LogoSvg}></img></div>;
};

export default Logo;
