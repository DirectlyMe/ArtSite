import React, { Component } from "react";
import CartItem from "../../components/CartItem/CartItem";
import LineBreak from "../../components/LineBreak";
import CartLabels from "../../components/CartLabels/CartLabels";
import LoadingSpinner from "../../components/LoadingSpinner";
import PageHeading from "../../components/PageHeading";
import Footer from "../../components/Footer/Footer";
import "./styles.css";

class CartPage extends Component {
  render() {
    return (
      <div>
        <PageHeading text="Cart" size={22} />
        <div className="CartContent">

          <Footer />
        </div>
      </div>
    );
  }
}

export default CartPage;
