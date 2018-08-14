import React from 'react'
import IconButton from '../IconButton/IconButton'
import './styles.css'

const CartItem = ({
	productID,
	productName,
	productQuantity,
	productPrice,
	remove
}) => {
	return (
		<div className="CartItem">
			<div className="Name">{productName}</div>
			<IconButton
				iconName="undo"
				iconClass="RemoveButton"
				iconClick={() => remove(productID)}
			/>
			<div className="QPItems">
				<div className="Quantity">{productQuantity}</div>
				<div className="Price">${productPrice}</div>
			</div>
		</div>
	)
}

export default CartItem
