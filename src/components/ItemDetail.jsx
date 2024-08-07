import { useState} from 'react';
import PropTypes from 'prop-types';
import ItemCount from '../components/ItemCount';
import '../assets/ItemDetail.css';

const ItemDetail = ({ product }) => {
    const [quantity, setQuantity] = useState(0);

    const handleAddToCart = () => {
        alert(`Agregaste ${quantity} ${product.name} al carrito. Total: ${quantity * parseFloat(product.price.replace('USD ', ''))}`);
    };

    return (
        <div className="item-detail">
            <h1>{product.name}</h1>
            <img src={product.Image} alt={product.name} className="item-detail-image" />
            <p>{product.description}</p>
            <p><strong>Precio:</strong> {product.price}</p>
            <ItemCount onAdd={setQuantity} />
            <button onClick={handleAddToCart} className="btn btn-primary">Comprar</button>
        </div>
    );
};

ItemDetail.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        category: PropTypes.string,
        Image: PropTypes.string.isRequired,
    }).isRequired,
};

export default ItemDetail;