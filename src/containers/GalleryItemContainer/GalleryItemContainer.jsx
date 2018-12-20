import React, { Component } from "react";
import { toast } from "react-toastify";
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

  addToCart = async (product_id, quantity, selectedType) => {
    const response = await addToCart(product_id, quantity, selectedType);
    if (response === true) {
      toast.success(`"${this.state.galleryItem.title}" : "${selectedType}" added to cart!`, {
        className: "add-to-cart-toast--success"
      });
    } else {
      toast.error(
        `Sorry ${
          this.state.galleryItem.title
        } wasn't added to cart, try checking your connection`,
        {
          className: "add-to-cart-toast--error"
        }
      );
    }
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
          addToCartFunc={this.addToCart}
        />
      );
    }
  }
}
GalleryItemContainer.contextType = Context;

export default GalleryItemContainer;
