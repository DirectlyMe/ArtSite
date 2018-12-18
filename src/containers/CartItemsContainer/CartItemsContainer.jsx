import React, { Component } from "react";
import Context from "../../Context";
import CartPage from "../../screens/CartPage/CartPage";
import { getCart, removeFromCart } from "../../api/CartCalls";
import "./styles.scss";

class CartItemsContainer extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      total: 0
    };
  }

  componentDidMount = async () => {
    await this.context.updateCart();
    this.calcPrice();
  };

  remove = async (id) => {
    await removeFromCart(id);
    await this.context.updateCart();
    this.calcPrice();
  };

  calcPrice = () => {
    let total = 0;
    this.context.cart.map(item => (total += item.price * item.quantity));
    this.setState({ total });
  };

  render() {
    return <CartPage {...this.state} />;
  }
}
CartItemsContainer.contextType = Context;

export default CartItemsContainer;
