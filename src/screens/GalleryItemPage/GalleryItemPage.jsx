import React, { Component } from "react";
import MediaQuery from "react-responsive";
import Context from "../../Context";
import PageHeading from "../../components/PageHeading";
import ItemImgGallery from "../../components/ItemImgGallery/ItemImgGallery";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import Footer from "../../components/Footer/Footer";
import AddToCartBtn from "../../components/AddToCart/AddToCartBtn";
import ItemTypeSelector from "../../components/ItemTypeSelector/ItemTypeSelector";
import "./styles.scss";

class GalleryItemPage extends Component {
  render() {
    const { width, height } = this.context;
    const { galleryItem, selectedType, selectTypeFunc, addToCartFunc } = this.props;
    const {
      title,
      images,
      types,
      description,
      price
    } = galleryItem;
    console.log("galleryItem rendered " + selectedType);

    let type = types.filter(type => type.type === selectedType);
    type = type[0];

    return (
      <div className="gallery-item-screen-desktop">
        <MediaQuery query="(max-width: 899px)">
          <div>
            <PageHeading text={title} size={30} />
            <ItemImgGallery images={images} />
            <ProductDescription
              price={price}
              description={description}
              postItem={this.props.postItemFunc}
            />
          </div>
          <Footer />
        </MediaQuery>
        <MediaQuery query="(min-width: 900px)">
          <div
            style={{
              width: width * 0.81,
              height: height
            }}
            className="content"
          >
            <PageHeading text={title} size={48} marginTop={30} />
            <ItemTypeSelector
              types={types}
              selectedType={selectedType}
              selectTypeFunc={selectTypeFunc}
            />
            <img
              src={images[0]}
              height="70%"
              width="75%"
              className="gallery-image"
              alt="gallery one"
            />
            <div className="product-description">
              <div>
                Materials
                <br />
                {type.materials}
              </div>
              <div>
                Dimensions
                <br />
                {type.width} x {type.height}
              </div>
            </div>
            <img
              src={images[1]}
              height="70%"
              width="75%"
              className="gallery-image"
              alt="gallery one"
            />
            <div className="product-description">
              <div className="product-price">
                Price <br />
                ${type.price}
              </div>
            </div>
            <img
              src={images[2]}
              height="70%"
              width="75%"
              className="gallery-image"
              alt="gallery one"
            />
          </div>
          <AddToCartBtn
            item={galleryItem}
            selectedType={type}
            selectTypeFunc={selectTypeFunc}
            addToCartFunc={addToCartFunc}
          />
          <Footer width={width * 0.82} position="fixed" />
        </MediaQuery>
      </div>
    );
  }
}
GalleryItemPage.contextType = Context;

export default GalleryItemPage;
