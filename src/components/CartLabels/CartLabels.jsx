import React from 'react';
import './styles.css';

const CartLabels = () => {
    return (  
        <div className="Labels">
            <div className="NameLabel">Item</div>
            <div className="QPLabels">
                <div className="QuantityLabel">Quantity</div>
                <div className="PriceLabel">Price</div>
            </div>
        </div>
    );
}

export default CartLabels;