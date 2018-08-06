import React, { Component } from 'react'
import axios from 'axios';

class GalleryItemContainer extends Component {
  state = {  
    id: 12345,
    title: 'Very Nice',
    description: 'Testing',
    price: 42
  }

  constructor(props, context) {
    super()
    
  }

  componentWillMount = async () => {
    
  }

  addItem = () => {

  }

  render() { 
    return (  
      <div></div>
    );
  }
}

export default GalleryItemContainer;