import React, { Component } from 'react';
import NavBarContainer from '../NavBarContainer/NavBarContainer'
import GalleryItemsContainer from '../GalleryItemsContainer/GalleryItemsContainer'
import Footer from '../../components/Footer/Footer'


class GalleryPage extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <NavBarContainer />
                <GalleryItemsContainer />
                <Footer />
            </div>
        );
    }
}

export default GalleryPage;