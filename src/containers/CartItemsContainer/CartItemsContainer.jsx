import React, { Component } from "react";
import CartPage from "../../screens/CartPage/CartPage";
import { getCart, removeFromCart } from "../../api/CartCalls";
import "./styles.css";

class CartItemsContainer extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      cart: null,
      total: 0
    };
  }

  componentDidMount = async () => {
    this.setState({ cart: await getCart() });
    this.calcPrice();
  };

  remove = async (id) => {
    await removeFromCart(id);
    this.setState(prevState => {
      return { cart: prevState.cart.filter(item => item.product_id !== id) };
    });
    this.calcPrice();
  };

  calcPrice = () => {
    let total = 0;
    this.state.cart.map(item => (total += item.price * item.quantity));
    this.setState({ total });
  };

  render() {
    const { cart, total } = this.state;
    return <CartPage />;
  }
}

export default CartItemsContainer;
