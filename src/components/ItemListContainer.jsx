
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList'; // Asegúrate de que el nombre sea correcto
import { getProducts } from '../services/products';
import '../assets/ItemListContainer.css';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        setError(null);

        getProducts(categoryId)
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error al cargar los productos:', err); // Para propósitos de depuración
                setError('Error al cargar los productos.');
                setLoading(false);
            });
    }, [categoryId]);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>{categoryId ? `Categoría: ${categoryId}` : 'Nuestros calcetines'}</h1>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;

