import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import '../assets/NavBar.css'; // Asegúrate de importar el archivo CSS

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid justify-content-center">
                <Link className="navbar-brand mx-auto" to="/">MiTienda</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/productos">Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contacto">Contacto</Link>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;

