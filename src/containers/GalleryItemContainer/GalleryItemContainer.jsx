import React, { Component } from "react";
import Context from "../../Context";
import { addToCart } from "../../api/CartCalls";
import GalleryItemPage from "../../screens/GalleryItemPage/GalleryItemPage";

class GalleryItemContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      galleryItem: null,
      selectedType: null
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
    const print = item[0].types.filter(itemType => itemType.type === "Print");

    if (print.length > 0) {
      this.setState({ galleryItem: item[0], selectedType: print[0].type });
    } else {
      this.setState({ 
        galleryItem: item[0],
        selectedType: item[0].types[0].type 
      });
    }
  };

  postItem = () => {
    addToCart(this.state.galleryItem.product_id);
  };

  selectType = type => {
    console.log(type);
    this.setState({ selectedType: type });
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
          {...this.state}
          postItemFunc={this.postItem}
          selectTypeFunc={this.selectType}
        />
      );
    }
  }
}
GalleryItemContainer.contextType = Context;

export default GalleryItemContainer;
