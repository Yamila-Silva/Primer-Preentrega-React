import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="/">TuTienda</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/products">Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">Nosotros</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Contacto</a>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;