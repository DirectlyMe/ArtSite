import React, { Component } from "react";
import MediaQuery from "react-responsive";
import Context from "../../Context";
import PageHeading from "../../components/PageHeading";
import Footer from "../../components/Footer/Footer";
import AddToCartBtn from "../../components/AddToCart/AddToCartBtn";
import ItemTypeSelector from "../../components/ItemTypeSelector/ItemTypeSelector";
import ExpandedImage from "../../components/ExpandedImage/ExpandedImage";
import "./styles.scss";

class GalleryItemPage extends Component {
    render() {
        const { width } = this.context;
        const {
            galleryItem,
            selectedType,
            selectTypeFunc,
            addToCartFunc,
            toggleExpandedScreenFunc,
            expandedSelected
        } = this.props;
        const { title, images, types } = galleryItem;

        let type = types.filter(type => type.type === selectedType);
        type = type[0]; // use this to get selected type's specs

        return (
            <div className="gallery-item-screen-desktop">
                <MediaQuery query="(max-width: 899px)">
                    <div className="gallery-item--content">
                        <PageHeading text={title} size={30} marginTop={80} />
                        <img
                            src={images[0]}
                            className="gallery-item--image"
                            alt="Art piece"
                            onClick={() => toggleExpandedScreenFunc()}
                        />
                        <ItemTypeSelector
                            types={types}
                            selectedType={selectedType}
                            selectTypeFunc={selectTypeFunc}
                        />
                        <div className="gallery-item--description">
                            {galleryItem.description ? (
                                <p>"{galleryItem.description}"</p>
                            ) : null}
                        </div>
                        <div className="gallery-item--description-wrapper">
                            <ul className="gallery-item--description-wrapper-list">
                                <li>Price: {type.price}</li>
                                <li>Materials: {type.materials}</li>
                                <li>
                                    Dimensions: {type.width} x {type.height} in.
                                </li>
                            </ul>
                        </div>
                        <AddToCartBtn
                            item={galleryItem}
                            selectedType={type}
                            selectTypeFunc={selectTypeFunc}
                            addToCartFunc={addToCartFunc}
                            />
                        {expandedSelected ? (
                            <ExpandedImage
                                toggleExpandedScreenFunc={toggleExpandedScreenFunc}
                                imageSrc={images[0]}
                            />
                        ) : null}
                    </div>
                    <Footer width={width} />
                </MediaQuery>
                <MediaQuery query="(min-width: 900px)">
                    <div
                        style={{
                            width: width * 0.82
                        }}
                        className="content"
                    >
                        <PageHeading text={title} size={48} marginTop={60} />
                        <ItemTypeSelector
                            types={types}
                            selectedType={selectedType}
                            selectTypeFunc={selectTypeFunc}
                        />
                        <img
                            src={images[0]}
                            className="gallery-item--image"
                            alt="gallery one"
                            onClick={() => toggleExpandedScreenFunc()}
                        />
                        <div className="gallery-item--description-wrapper">
                            {galleryItem.description ? (
                                <p>"{galleryItem.description}"</p>
                            ) : null}
                            <div className="gallery-item-test">
                                <span>
                                    Materials
                                    <br />
                                    {type.materials}
                                </span>
                                <span>
                                    Dimensions
                                    <br />
                                    {type.width} x {type.height} in.
                                </span>
                                <span>
                                    Price
                                    <br />${type.price}
                                </span>
                            </div>
                        </div>
                    </div>
                    <AddToCartBtn
                        item={galleryItem}
                        selectedType={type}
                        selectTypeFunc={selectTypeFunc}
                        addToCartFunc={addToCartFunc}
                    />
                    <Footer width={width * 0.82} position="fixed" />
                    {expandedSelected ? (
                        <ExpandedImage
                            toggleExpandedScreenFunc={toggleExpandedScreenFunc}
                            imageSrc={images[0]}
                        />
                    ) : null}
                </MediaQuery>
            </div>
        );
    }
}
GalleryItemPage.contextType = Context;

export default GalleryItemPage;
