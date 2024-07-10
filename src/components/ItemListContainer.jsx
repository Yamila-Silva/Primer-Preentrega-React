import PropTypes from 'prop-types';

const ItemListContainer = ({ greeting, stock }) => {
  return (
    <div>
      <h2>{greeting}</h2>
      <p>Stock disponible: {stock}</p>
      {/* Se mostrará el catálogo de productos en el futuro */}
    </div>
  );
}

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired
};

export default ItemListContainer;
