import React, { Component } from 'react'
import './styles.css'

class ItemImgGallery extends Component {
	state = {
		itemImages: this.props.images,
		imgInFocus: this.props.images[0]
	}

	imageSelected = (image) => {
		this.setState({ imgInFocus: image })
	}

	render() {
		let imageNodes = this.state.itemImages.map(image => (
			<img
				key={image}
				src={image}
				alt="Other"
				className="ImageRowItem"
				onClick={(e) => this.imageSelected(image)}
			/>
		))
		return (
			<div className="Container">
				<img src={this.state.imgInFocus} alt="Main" className="InFocusImage" />
				<div className="ImageRow">{imageNodes}</div>
			</div>
		)
	}
}

export default ItemImgGallery
