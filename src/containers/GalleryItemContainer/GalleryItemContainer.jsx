import React, { Component } from "react";
import ItemImgGallery from "../../components/ItemImgGallery/ItemImgGallery";
import PageHeading from "../../components/PageHeading/PageHeading";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import { getSingleItem } from "../../api/GalleryCalls";
import { addToCart } from "../../api/CartCalls";

class GalleryItemContainer extends Component {
  state = {
    galleryItem: null
  };

  componentDidMount = async () => {
    const { id } = this.props;
    this.setState({ galleryItem: await getSingleItem(id) });
  };

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
          <PageHeading text={title} />
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

export default GalleryItemContainer;
