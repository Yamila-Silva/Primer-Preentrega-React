
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/products';
import ItemDetail from '../components/ItemDetail';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        getProductById(id).then(setProduct);
    }, [id]);

    if (!product) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="container">
            <ItemDetail product={product} />
        </div>
    );
};

export default ItemDetailContainer;

