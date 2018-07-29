import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const GalleryItem = ({ productId, galleryImage, description, title }) => {
	return (
		<div className="GalleryItem">
			<Link to={`/Gallery:${productId}`} className="ProductLink">
				<img src={galleryImage} alt="Gallery Item" alt="Kelsey's Art"/>
				<div className="GalleryTitle">{title}</div>
				<div className="GalleryDescription">{description}</div>
			</Link>
		</div>
	)
}

export default GalleryItem