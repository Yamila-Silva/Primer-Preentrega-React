import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../assets/ItemDetail.css';

const ItemList = ({ products }) => {
    return (
        <div className="item-list">
            {products.map((product) => (
                <div key={product.id} className="item">
                    <img src={product.Image} alt={product.name} className="item-image" />
                    <h3 className="item-name">{product.name}</h3>
                    <p className="item-price">{product.price}</p>
                    <Link to={`/product/${product.id}`} className="btn btn-primary">Ver detalles</Link>
                </div>
            ))}
        </div>
    );
};

ItemList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            category: PropTypes.string,
            Image: PropTypes.string.isRequired, // Asegúrate de que `Image` sea una cadena
        })
    ).isRequired,
};

export default ItemList;