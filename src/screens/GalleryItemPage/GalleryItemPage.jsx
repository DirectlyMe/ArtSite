import React, { Component } from "react";
import MediaQuery from "react-responsive";
import Context from "../../Context";
import PageHeading from "../../components/PageHeading";
import ItemImgGallery from "../../components/ItemImgGallery/ItemImgGallery";
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
    } = galleryItem;

    let type = types.filter(type => type.type === selectedType);
    type = type[0];   // use this to get selected type's specs

    return (
      <div className="gallery-item-screen-desktop">
        <MediaQuery query="(max-width: 899px)">
          <div style={{ marginTop: "80px"}}>
            <PageHeading text={title} size={30} marginTop={10} />
            <ItemImgGallery images={images} />
            <ItemTypeSelector
              types={types}
              selectedType={selectedType}
              selectTypeFunc={selectTypeFunc}
            />
            <div className="gallery-item--description">
              <ul className="gallery-item--description-list">
                <li>
                  Price: {type.price}
                </li>
                <li>Materials: {type.materials}</li>
                <li>Dimensions: {type.width} x {type.height}</li>
              </ul>
            </div>
            <AddToCartBtn
              item={galleryItem}
              selectedType={type}
              selectTypeFunc={selectTypeFunc}
              addToCartFunc={addToCartFunc}
            />
          </div>
          <Footer width={width} />
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
              className="gallery-item--image"
              alt="gallery one"
            />
            <div className="gallery-item--description">
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
              <div>
                Price<br />
                ${type.price}
              </div>
            </div>
            <img
              src={images[1]}
              className="gallery-item--image"
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
