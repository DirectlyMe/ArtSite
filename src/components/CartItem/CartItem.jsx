import React from "react";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import { ReactComponent as ExitIcon } from "../../images/ExitIcon.svg";
import "./styles.scss";

const CartItem = ({ cartItem, removeItemFunc }) => {
    const price = cartItem.price * cartItem.quantity;

    return (
        <div>
            <MediaQuery query="(min-width: 900px)">
                <div className="cart-item">
                    <ExitIcon
                        className="cart-item--remove-btn"
                        onClick={() =>
                            removeItemFunc(
                                cartItem.product_id,
                                cartItem.quantity,
                                cartItem.type
                            )
                        }
                    />
                    <Link to={`/gallery-item/${cartItem.product_id}`}>
                        <img
                            src={cartItem.image}
                            className="cart-item--image"
                            alt="product"
                        />
                    </Link>
                    <div className="cart-item--content">
                        <span className="cart-item--title">{cartItem.title}</span>
                        <div className="cart-item--properties">
                            <div className="cart-item--properties---row-one">
                                <span className="cart-item--property-header">Type</span>
                                <span>{cartItem.type}</span>
                            </div>
                            <div className="cart-item--properties---row-two">
                                <span className="cart-item--property-header">
                                    Quantity
                                </span>
                                <span>{cartItem.quantity}</span>
                            </div>
                        </div>
                        <span className="cart-item--total-price">Price: ${price}</span>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery query="(max-width: 899px)">
                <div className="cart-item--title">{cartItem.title}</div>
                <div className="cart-item">
                    <img
                        src={cartItem.image}
                        className="cart-item--image"
                        alt="product"
                    />
                    <div className="cart-item--properties">
                        <div className="cart-item--total-price">Price: ${price}</div>
                        <div className="cart-item--property-type">
                            Type: {cartItem.type}
                        </div>
                        <div className="cart-item--property-quantity">
                            Quantity: {cartItem.quantity}
                        </div>
                        <button
                            className="cart-item--remove-btn"
                            onClick={() =>
                                removeItemFunc(
                                    cartItem.product_id,
                                    cartItem.quantity,
                                    cartItem.type
                                )
                            }
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </MediaQuery>
        </div>
    );
};

export default CartItem;
