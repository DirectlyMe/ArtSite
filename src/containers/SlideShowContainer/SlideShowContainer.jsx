import React, { Component } from 'react';
import Slider from '../../components/SlideShow/SlideShow'
import 'react-animated-slider/build/horizontal.css';
import { getGalleryItems } from '../../api/GalleryCalls';
import './styles.css';

class SlideShowContainer extends Component {
    state = { 
        slideShowItems: [],
        currentImage: null
    }

    componentWillMount = async () => {
        this.setState({ slideShowItems: await getGalleryItems() })
    }

    render() { 
        return ( 
            <Slider content={this.state.slideShowItems} />
        );
    }
}

export default SlideShowContainer;