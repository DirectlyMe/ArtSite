import React, { Component } from 'react';
import NavBarContainer from '../NavBarContainer/NavBarContainer';
import CartContainer from '../CartItemsContainer/CartItemsContainer';
import PageHeading from '../../components/PageHeading/PageHeading';
import Footer from '../../components/Footer/Footer';
import LineBreak from '../../components/LineBreak/LineBreak';
import CartLabels from '../../components/CartLabels/CartLabels';
import './styles.css';

class CartPage extends Component {
  render() {
    return (
      <div>
        <NavBarContainer />
        <PageHeading text="Cart" />
        <CartLabels />
        <LineBreak />
        <CartContainer />
        <LineBreak />
        <div className="TotalLabels">
          <div className="TotalLabel">
            Total
          </div>
          <div className="TotalPrice">
            $200
          </div>
        </div>
        <div className="Checkout">
          Checkout
        </div>
        <Footer />
      </div>
    );
  }
}

export default CartPage;
