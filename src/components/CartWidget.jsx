import cartIcon from '../assets/cart-icon.png';
import '..//assets/CartWidget.css'; // Asegúrate de importar el archivo CSS

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <img src={cartIcon} alt="Carrito" className="cart-icon" />
            <span className="badge bg-secondary">3</span>
        </div>
    );
}

export default CartWidget;
