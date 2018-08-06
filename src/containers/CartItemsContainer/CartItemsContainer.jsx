import React, { Component } from 'react'
import CartItem from '../../components/CartItem/CartItem'

class CartItemsContainer extends Component {
	render() {
		return (
			<div>
				<CartItem
					productID={1234}
					productName="Test Item"
					productQuantity={2}
					productPrice={50}
				/>
				<CartItem
					productID={1234}
					productName="Gazing Lights"
					productQuantity={1}
					productPrice={200}
				/>
				<CartItem
					productID={1234}
					productName="Origins"
					productQuantity={3}
					productPrice={20.00}
				/>
				<CartItem
					productID={1234}
					productName="Soft Anatomy"
					productQuantity={1}
					productPrice={100}
				/>
				<CartItem
					productID={1234}
					productName="Yellow Tomb"
					productQuantity={1}
					productPrice={80}
				/>
			</div>
		)
	}
}

export default CartItemsContainer
