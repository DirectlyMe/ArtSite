import React, { Component } from 'react'
import NavBarContainer from '../NavBarContainer/NavBarContainer'
import Footer from '../../components/Footer/Footer'

import GalleryItemContainer from '../GalleryItemContainer/GalleryItemContainer'

class GalleryItemPage extends Component {
  state = {}

  render() { 
    return (  
      <div>
        <NavBarContainer />
        <GalleryItemContainer id={ this.props.match.params.id }/>
        <Footer />
      </div>
    );
  }
}

export default GalleryItemPage;