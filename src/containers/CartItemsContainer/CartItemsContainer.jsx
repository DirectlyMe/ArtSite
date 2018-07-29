import React, { Component } from 'react'
import CartItem from '../../components/CartItem/CartItem'

class CartItemsContainer extends Component {
	render() {
		return (
			<CartItem
				productID={1234}
				productName="Test Item"
				productQuantity={1}
				productPrice={200.0}
			/>
		)
	}
}

export default CartItemsContainer
