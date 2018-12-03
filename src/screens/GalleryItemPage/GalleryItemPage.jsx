import React, { Component } from "react";
import Context from "../../Context";
import MediaQuery from "react-responsive";
import PageHeading from "../../components/PageHeading";
import ItemImgGallery from "../../components/ItemImgGallery/ItemImgGallery";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import Footer from "../../components/Footer/Footer";
import "./styles.scss";

class GalleryItemPage extends Component {
  render() {
    const { width, height } = this.context;
    const { title, images, description, price } = this.props.galleryItem;
    return (
      <div className="gallery-item-screen-desktop">
        <MediaQuery query="(max-width: 899px)">
          <div>
            <PageHeading text={title} size={22} />
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
              width: width * 0.82,
              height: height
            }}
            className="content"
          >
            <PageHeading text={title} size={40} marginTop={30} />
            <img
              src={images[0]}
              height="530px"
              width="75%"
              className="gallery-image"
              alt="gallery one"
            />
            <div className="product-description">
              <div>{description}</div>
              <div>{description}</div>
            </div>
            <img
              src={images[1]}
              height="530px"
              width="75%"
              className="gallery-image"
              alt="gallery one"
            />
            <div className="product-description">
              <div>{description}</div>
              <div>{description}</div>
            </div>
            <img
              src={images[2]}
              height="530px"
              width="75%"
              className="gallery-image"
              alt="gallery one"
            />
          </div>
          <Footer width={width * .82} position="fixed" />
        </MediaQuery>
      </div>
    );
  }
}
GalleryItemPage.contextType = Context;

export default GalleryItemPage;
