import cartIcon from '../assets/cart-icon.png'; // Asegúrate de tener un icono en esta ruta

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img src={cartIcon} alt="Cart" />
      <span>3</span>
    </div>
  );
}

export default CartWidget;