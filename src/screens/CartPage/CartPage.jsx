import React, { Component } from "react";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import Context from "../../Context";
import CartItem from "../../components/CartItem/CartItem";
import PageHeading from "../../components/PageHeading";
import Footer from "../../components/Footer/Footer";
import "./styles.scss";

class CartPage extends Component {
    render() {
        const { width, cartItems,  cartTotal } = this.context;
        let cartEntries = [];

        if (cartItems.length > 0) {
            cartEntries = cartItems.map((item, index) => (
                <CartItem
                    key={index}
                    cartItem={item}
                    removeItemFunc={this.props.removeItemFunc}
                />
            ));
        }

        return (
            <div>
                <MediaQuery query="(min-width: 900px)">
                    <div className="cart-page" style={{ width: width * 0.81 }}>
                        <PageHeading text="Cart" size={48} marginTop={60} />
                        <div className="cart-page--content">
                            <div className="cart-page--cart-items">{cartEntries}</div>
                            <div className="cart-page--total-price">
                                Total: ${cartTotal}
                            </div>
                            <div className="cart-page--checkout">
                                {cartEntries.length > 0 ? (
                                    <Link className="cart-page--checkout---btn" to="/checkout">
                                        Checkout
                                    </Link>
                                ) : null}
                            </div>
                        </div>
                        <Footer width={width * 0.82} />
                    </div>
                </MediaQuery>
                <MediaQuery query="(max-width: 899px)">
                    <div className="cart-page">
                        <PageHeading text="Cart" size={34} marginTop={80} />
                        <div>{cartEntries}</div>
                        <div className="cart-page--total-price">
                            Total: ${cartTotal}
                        </div>
                        <div className="cart-page--checkout">
                            {cartEntries.length > 0 ? (
                                <Link className="cart-page--checkout---btn" to="/checkout">
                                    Checkout
                                </Link>
                            ) : null}
                        </div>
                    </div>
                </MediaQuery>
            </div>
        );
    }
}
CartPage.contextType = Context;

export default CartPage;
