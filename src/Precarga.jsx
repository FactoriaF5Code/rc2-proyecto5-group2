import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Precarga.css';

import { Logo } from "./components/logo/logo";
import fondoCatalogo from "./assets/fondo_precarga.jpeg";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigate('/inicio');
  };

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
        <button type="button" onClick={handleLogin} className="botonIniciar">
          Iniciar sesión
        </button>
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
