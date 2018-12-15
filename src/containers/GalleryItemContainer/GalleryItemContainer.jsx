import React, { Component } from "react";
import Context from "../../Context";
import { addToCart } from "../../api/CartCalls";
import GalleryItemPage from "../../screens/GalleryItemPage/GalleryItemPage";

class GalleryItemContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      galleryItem: null
    };
  }

  componentDidMount() {
    this.getItem();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.getItem();
    }
  }

  getItem = () => {
    const { galleryItems } = this.context;

    if (
      galleryItems === undefined ||
      galleryItems === null ||
      galleryItems.length === 0
    )
      return;
      
    const { id } = this.props.match.params;
    const item = galleryItems.filter(item => item.product_id === Number(id));
    this.setState({ galleryItem: item[0] });
  };

  postItem = () => {
    addToCart(this.state.galleryItem.product_id);
  };

  render() {
    if (this.state.galleryItem === null) {
      return (
        <div style={{ textAlign: "center", marginTop: "200px" }}>
          Loading...
        </div>
      );
    } else {
      return (
        <GalleryItemPage
          galleryItem={this.state.galleryItem}
          postItemFunc={this.postItem}
        />
      );
    }
  }
}
GalleryItemContainer.contextType = Context;

export default GalleryItemContainer;
