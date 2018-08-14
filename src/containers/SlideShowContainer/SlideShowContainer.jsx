import React, { Component } from 'react'
import Slider from '../../components/SlideShow/SlideShow'
import { getGalleryItems } from '../../api/GalleryCalls';
import './styles.css'

class SlideShowContainer extends Component {
	state = {
		slideShowItems: null
	}

	componentDidMount = async () => {
		this.setState({ slideShowItems: await getGalleryItems() })
	}

	render() {
        if (this.state.slideShowItems === null) {
            return <div style={{textAlign: "center", marginTop: "200px"}}>Loading...</div>
        } else {
            return <Slider products={this.state.slideShowItems} />
        }
	}
}

export default SlideShowContainer
