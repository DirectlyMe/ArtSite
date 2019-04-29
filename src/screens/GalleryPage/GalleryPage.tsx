import React, { FunctionComponent } from "react";
import GalleryItem from "../../components/GalleryItem/GalleryItem";
import Footer from "../../components/Footer/Footer";
import PageHeading from "../../components/PageHeading";
import "./styles.scss";

interface IGalleryPage {
    products: ArtProduct[];
}

const GalleryPage: FunctionComponent<IGalleryPage> = ({ products }) => {
    if (!products) {
        return <div>loading...</div>;
    } else {
        let itemNodes = products.map(item => {
            if (item.images && item.types && item.title)
                return (
                    <GalleryItem
                        key={item.product_id}
                        productId={item.product_id}
                        galleryImage={item.images[0]}
                        price={item.types[0].price}
                        title={item.title}
                    />
                );
        });
        return (
            <div style={{ width: window.innerWidth }} className="gallery-page">
                <PageHeading text="Gallery" size={30} marginTop={80} />
                <div className="gallery-page--items">{itemNodes}</div>
                <Footer width={window.innerWidth} position="fixed" />
            </div>
        );
    }
};

export default GalleryPage;
