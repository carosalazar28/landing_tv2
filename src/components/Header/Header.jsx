import "./styles.css";

const Header = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list-item nav__list-item-contact">Contacto</li>
        <li className="nav__list-item">Home</li>
        <li className="nav__list-item">Precios</li>
        <li className="nav__list-item">Blog</li>
      </ul>
    </nav>
  );
};

export default Header;
