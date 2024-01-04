import "./Header.css";

export const Header = () => {
  return (
    <nav className="Header">
      <div className="Header izquierda">
        <img src=""></img>
        <a href=""> Inicio</a>
        <a href=""> Series Tv</a>
        <a href=""> Peliculas</a>
        <a href=""> Infantil</a>
        <a href=""> Mi lista</a>
      </div>
      <div>
        <img src=""></img>
        <button>Lupa</button>
      </div>
    </nav>
  );
};
