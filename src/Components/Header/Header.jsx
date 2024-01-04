import "./Header.css";
import Logo from './Logo';
import Menu from './Menu';
//import Buttons from './Button';

const NavHeader= () => {
  return (
    <nav className="header">
      <Logo />
      <Menu />

    </nav>
  );
};

export default NavHeader;
