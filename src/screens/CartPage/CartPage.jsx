import React, { Component } from "react";
import CartContainer from "../../containers/CartItemsContainer/CartItemsContainer";
import PageHeading from "../../components/PageHeading/PageHeading";
import Footer from "../../components/Footer/Footer";
import "./styles.css";

class CartPage extends Component {
  render() {
    return (
      <div>
        <PageHeading text="Cart" />
        <div className="CartContent">
          <CartContainer />
          <Footer />
        </div>
      </div>
    );
  }
}

export default CartPage;
