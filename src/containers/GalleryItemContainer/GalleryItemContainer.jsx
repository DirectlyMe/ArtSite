import React, { Component } from "react";
import Context from "../../Context";
import ItemImgGallery from "../../components/ItemImgGallery/ItemImgGallery";
import PageHeading from "../../components/PageHeading";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import { addToCart } from "../../api/CartCalls";

class GalleryItemContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      galleryItem: null
    };
  }

  componentDidMount() {
    this.getItem();
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) { 
      this.getItem();
    }
  }

  getItem = () => {
    if (this.context.galleryItems !== undefined && this.context.galleryItems !== null) {
      if (this.context.galleryItems.length !== 0) {
        const { id } = this.props;
        const item = this.context.galleryItems.filter(item => item._id === id);
        this.setState({ galleryItem: item[0] });
      }
    }
  }

  postItem = () => {
    addToCart(this.state.galleryItem._id);
  };

  render() {
    if (this.state.galleryItem === null) {
      return (
        <div style={{ textAlign: "center", marginTop: "200px" }}>
          Loading...
        </div>
      );
    } else {
      const { title, images, description, price } = this.state.galleryItem;
      return (
        <div className="GalleryContent">
          <PageHeading text={title} size={22} />
          <ItemImgGallery images={images} />
          <ProductDescription
            price={price}
            description={description}
            postItem={this.postItem}
          />
        </div>
      );
    }
  }
}
GalleryItemContainer.contextType = Context;

export default GalleryItemContainer;
