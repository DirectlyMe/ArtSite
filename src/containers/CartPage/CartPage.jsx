import React, { Component } from 'react'
import NavBarContainer from '../NavBarContainer/NavBarContainer'
import CartContainer from '../CartItemsContainer/CartItemsContainer'
import PageHeading from '../../components/PageHeading/PageHeading'
import Footer from '../../components/Footer/Footer'
import './styles.css'

class CartPage extends Component {
	render() {
		return (
			<div>
				<NavBarContainer />
				<PageHeading text="Cart" />
				<div className="CartContent">
					<CartContainer />
					<Footer />
				</div>
			</div>
		)
	}
}

export default CartPage
