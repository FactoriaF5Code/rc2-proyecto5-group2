// src/components/Menu.jsx
import './Menu.css'
import './NavItem.jsx'
import NavItem from './NavItem.jsx';

const Menu = () => {
  return (
    <nav className='menu'>
        <NavItem href="" text="Inicio" />
        <NavItem href="" text="Series TV" />
        <NavItem href="" text="Peliculas" />
        <NavItem href="" text="Infantil" />
        <NavItem href="" text="Mi lista" />
    </nav>
  );
};

export default Menu;