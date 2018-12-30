import React, { Component } from "react";
import MediaQuery from "react-responsive";
import Context from "../../Context";
import CartItem from "../../components/CartItem/CartItem";
import PageHeading from "../../components/PageHeading";
import Footer from "../../components/Footer/Footer";
import "./styles.scss";

class CartPage extends Component {
  render() {
    const { width, height } = this.context;

    const cartItems = this.context.cartItems.map(item => (
      <CartItem cartItem={item} removeItemFunc={this.props.removeItemFunc} />
    ));

    return <div>
        <MediaQuery query="(min-width: 900px)">
          <div className="cart-page" style={{ width: width * 0.82, height: height }}>
            <PageHeading text="Cart" size={48} marginTop={30} />
            <div className="cart-page--content">
              <div className="cart-page--cart-items">{cartItems}</div>
              <div className="cart-page--total-price">
                Total: ${this.props.total}
              </div>
              <div className="cart-page--checkout">
                <button className="cart-page--checkout---btn" onClick={this.props.checkoutOrderFunc}>
                  Checkout
                </button>
                {window.ApplePaySession ? <button className="cart-page--checkout---apple-pay" onClick={this.props.checkoutOrderFunc}>
                    {" "}
                  </button> : null}
              </div>
            </div>
            <Footer width={width * 0.82} />
          </div>
        </MediaQuery>
        <MediaQuery query="(max-width: 899px)">
          <div className="cart-page" style={{ height: height }}>
            <PageHeading text="Cart" size={34} marginTop={0} />
            <div>{cartItems}</div>
            <div className="cart-page--checkout">
              <button className="cart-page--checkout---btn" onClick={this.props.checkoutOrderFunc}>
                Checkout
              </button>
              {window.ApplePaySession ? <button className="cart-page--checkout---apple-pay" onClick={this.props.checkoutOrderFunc}>
                  {" "}
                </button> : null}
            </div>
          </div>
        </MediaQuery>
      </div>;
  }
}
CartPage.contextType = Context;

export default CartPage;
