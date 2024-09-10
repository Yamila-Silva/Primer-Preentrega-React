/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Card from 'react-bootstrap/Card';
import "../ItemDetail/ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount.jsx"
import { useCartContext } from '../../Context/CartContext.jsx';

const ItemDetail = ({id, name, description, precio, stock, img}) => {
    
    const {addToCart} = useCartContext()

    const handleBuy = (qty) =>{ 
        const productos = {id, name, description, precio}
        addToCart(productos, qty)
    }

    return(
        <>
            <div className="d-flex justify-content-center align-items-center p-4 item-detail-container">
                <div className="item-detail-image">
                    <img src={img} alt={name} className="img-fluid rounded shadow-sm" />
                </div>
                <Card className="item-detail-card shadow-lg p-3 rounded" style={{maxWidth: '400px'}}>
                    <Card.Body>
                        <h1 className="item-title">{name}</h1>
                        <p className="item-description">{description}</p>
                        <p className="item-price">${precio}</p>
                        <ItemCount stock={stock} inicial={1} handleBuy={handleBuy} />
                    </Card.Body>
                    <Card.Footer className="text-muted text-center">Solo quedan: {stock}</Card.Footer>
                </Card>
            </div>
   </>
)
}

export default ItemDetail;