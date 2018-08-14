import React from 'react'
import './styles.css'

const ProductDescription = ({ price, description, postItem }) => {
	return (
		<div className="ProductSpec">
			<div className="ProductPrice">Price: ${price}</div>
			<div className="Description">{description}</div>
			<div className="AddToCart" onClick={postItem}>
				Add to Cart
			</div>
		</div>
	)
}

export default ProductDescription
