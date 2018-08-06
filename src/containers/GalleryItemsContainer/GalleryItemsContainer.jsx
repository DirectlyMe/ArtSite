import React, { Component } from 'react'
import { getGalleryItems } from '../../api/GalleryCalls'
import GalleryItem from '../../components/GalleryItem/GalleryItem'
import './styles.css'

class GalleryItemsContainer extends Component {
	state = {
		galleryItems: []
	}

	componentWillMount = async () => {
		this.setState({ galleryItems: await getGalleryItems() })
	}

	render() {
		let itemNodes = this.state.galleryItems.map(item => (
			<GalleryItem
				key={item._id}
				productId={item._id}
				galleryImage={item.imagePath}
				description={item.description}
				title={item.title}
			/>
		))

		return <div className="GalleryItems">{itemNodes}</div>
	}
}

export default GalleryItemsContainer
