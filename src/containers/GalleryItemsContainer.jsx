import React, { Component } from "react";
import Context from "../Context";
import GalleryItem from "../components/GalleryItem/GalleryItem";

class GalleryItemsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      galleryItems: null,
    };
  }

  componentDidMount() {
    this.setState({ galleryItems: this.context.galleryItems });
  };

  componentDidUpdate(prevProps) {
    if (prevProps === this.props) return;

    this.setState({ galleryItems: this.context.galleryItems });
  }

  render() {
    if (this.state.galleryItems === null) {
      return <div>loading...</div>;
    } else {
      let itemNodes = this.state.galleryItems.map(item => (
        <GalleryItem
          key={item.product_id}
          productId={item.product_id}
          galleryImage={item.images[0]}
          description={item.description}
          title={item.title}
        />
      ));
      return <div style={{ paddingBottom: "4vh" }}>{itemNodes}</div>;
    }
  }
}
GalleryItemsContainer.contextType = Context;

export default GalleryItemsContainer;
