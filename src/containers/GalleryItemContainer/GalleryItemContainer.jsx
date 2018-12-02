import React, { Component } from "react";
import MediaQuery from "react-responsive";
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
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.getItem();
    }
  }

  getItem = () => {
    const { galleryItems } = this.context;

    if (galleryItems === undefined || galleryItems === null) return;

    if (galleryItems.length !== 0) {
      const { id } = this.props;
      const item = galleryItems.filter(item => item._id === id);
      this.setState({ galleryItem: item[0] });
    }
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
        <div>
          <MediaQuery query="(max-width: 899px)">
            <div className="GalleryContent">
              <PageHeading text={title} size={22} />
              <ItemImgGallery images={images} />
              <ProductDescription
                price={price}
                description={description}
                postItem={this.postItem}
              />
            </div>
          </MediaQuery>
          <MediaQuery query="(min-width: 900px)">
            <div />
          </MediaQuery>
        </div>
      );
    }
  }
}
GalleryItemContainer.contextType = Context;

export default GalleryItemContainer;
