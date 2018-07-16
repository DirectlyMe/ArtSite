import React, { Component } from 'react';
import GalleryItem from '../../components/GalleryItem/GalleryItem';
import { getGalleryItems } from '../../api/MockGallery'


class GalleryItemsContainer extends Component {
    state = {
        galleryItems: []
    }

	componentWillMount = () => {
        this.setState({ galleryItems: getGalleryItems() })
	}

	render() {
        let itemNodes = this.state.galleryItems.map(item => 
            <GalleryItem
                key={item.id}
                productId={item.id}
                galleryImage={item.imagePath}
                description={item.description}
                title={item.title}
            />
        )
		
		return <div>{itemNodes}</div>
	}
}

export default GalleryItemsContainer
