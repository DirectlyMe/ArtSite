import React, { Component } from "react";
import CartItem from "../../components/CartItem/CartItem";
import LineBreak from "../../components/LineBreak";
import CartLabels from "../../components/CartLabels/CartLabels";
import { getCart, removeFromCart } from "../../api/CartCalls";
import "./styles.css";

class CartItemsContainer extends Component {
  state = {
    cart: null,
    total: 0
  };

  componentDidMount = async () => {
    this.setState({ cart: await getCart() });
    this.calcPrice();
  };

  remove = async id => {
    await removeFromCart(id);
    this.setState(prevState => {
      return { cart: prevState.cart.filter(item => item._id !== id) };
    });
    this.calcPrice();
  };

  calcPrice = () => {
    let total = 0;
    this.state.cart.map(item => (total += item.price * item.quantity));
    this.setState({ total });
  };

  render() {
    if (this.state.cart === null) {
      return (
        <div style={{ textAlign: "center", marginTop: "200px" }}>
          Loading...
        </div>
      );
    } else if (this.state.cart.length === 0) {
      return (
        <div>
          <CartLabels />
          <LineBreak />
          <div style={{ textAlign: "center" }}>Oh no it's empty!</div>
          <LineBreak />
          <div className="TotalLabels">
            <div className="TotalLabel">Total</div>
            <div className="TotalPrice">${this.state.total}</div>
          </div>
          <div className="CheckoutButton">Checkout</div>
        </div>
      );
    } else {
      const cartItems = this.state.cart.map(item => (
        <CartItem
          key={item._id}
          productID={item._id}
          productName={item.title}
          productQuantity={item.quantity}
          productPrice={item.price}
          remove={this.remove}
        />
      ));
      return (
        <div>
          <CartLabels />
          <LineBreak />
          <div>{cartItems}</div>
          <LineBreak />
          <div className="TotalLabels">
            <div className="TotalLabel">Total</div>
            <div className="TotalPrice">${this.state.total}</div>
          </div>
          <div className="CheckoutButton">Checkout</div>
        </div>
      );
    }
  }
}

export default CartItemsContainer;
