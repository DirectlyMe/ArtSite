import React, { Component } from 'react';
import SlideShow from '../../components/SlideShow/SlideShow'
import Iconbutton from '../../components/IconButton/IconButton';
import { getGalleryItems } from '../../api/MockGallery';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import './styles.css';

class SlideShowContainer extends Component {
    state = { 
        slideShowImages: [],
        currentImage: null
    }

    componentWillMount() {
        this.rotateImages()
    }

    componentWillUnmount() {
        clearInterval(this.rotation)
    }

    rotateImages = async () => {
        await this.setState({ slideShowImages: getGalleryItems() })
        this.setState({ currentImage: this.state.slideShowImages[0].imagePath })
        this.startRotation()
    }

    startRotation = () => {
        let imageIndex = 0

        this.rotation = setInterval(() => {
            this.setState({ currentImage: this.state.slideShowImages[imageIndex].imagePath })

            imageIndex = imageIndex !== this.state.slideShowImages.length-1 ? imageIndex + 1 : 0
        }, 4000)
    }

    render() { 
        return ( 
            <div className="SlideShowContainer">
                <SlideShow currentImage={this.state.currentImage} />
                <ul>
                    <li><Iconbutton iconName={faCircle} iconClass="Circle" /></li>
                    <li><Iconbutton iconName={faCircle} iconClass="Circle" /></li>
                    <li><Iconbutton iconName={faCircle} iconClass="Circle" /></li>
                </ul>
            </div>
        );
    }
}

export default SlideShowContainer;