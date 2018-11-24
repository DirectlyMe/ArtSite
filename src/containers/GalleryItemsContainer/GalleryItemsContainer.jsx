import React, { Component } from "react";
import { getGalleryItems } from "../../api/GalleryCalls";
import GalleryItem from "../../components/GalleryItem/GalleryItem";
import "./styles.css";

class GalleryItemsContainer extends Component {
  state = {
    galleryItems: null
  };

  componentDidMount = async () => {
    this.setState({ galleryItems: await getGalleryItems() });
  };

  render() {
    if (this.state.galleryItems === null) {
      return <div>loading...</div>;
    } else {
      let itemNodes = this.state.galleryItems.map(item => (
        <GalleryItem
          key={item._id}
          productId={item._id}
          galleryImage={item.images[0]}
          description={item.description}
          title={item.title}
        />
      ));
      return <div className="GalleryItems">{itemNodes}</div>;
    }
  }
}

export default GalleryItemsContainer;
