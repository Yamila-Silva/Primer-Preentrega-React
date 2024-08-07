import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Item = ({ product }) => {
    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <Link to={`/item/${product.id}`}>Mas info</Link>
        </div>
    );
};

Item.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        category: PropTypes.string,
    }).isRequired,
};

export default Item;

