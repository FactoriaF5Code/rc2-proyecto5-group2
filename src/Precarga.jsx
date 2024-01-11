import { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import './Precarga.css';

import { Logo } from "./components/logo/logo";
import fondoCatalogo from "./assets/fondo_precarga.jpeg";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <section className="login">
      <form>
        <p>Iniciar sesión</p>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Tu alias o email"
        />
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Tu contraseña"
        />
        <a href="" className="olvido">¿Olvidaste tu contraseña?</a>
        <Link to="/inicio" className="botonIniciar">
          Iniciar sesión
        </Link>
      </form>
    </section>
  );
};

export const Precarga = () => {
  return (
    <div className="inicio">
      <div className='logoPrecarga'>
        <Logo className="logo" />
      </div>
      <img src={fondoCatalogo} alt="Imagen de fondo" className="fondoCatalogo" />
      <Login />
    </div>
  );
};
