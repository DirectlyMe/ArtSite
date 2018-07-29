import React from 'react';
import './styles.css'

const CartItem = ({ productID, productName, productQuantity, productPrice }) => {
    return (  
        <div className="CartItem">
            <div className="Name">{productName}</div>
            <div className="QPItems">
                <div className="Quantity">{productQuantity}</div>
                <div className="Price">${productPrice}</div>
            </div>
        </div>
    );
}

export default CartItem;