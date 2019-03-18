import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

interface IGalleryItem {
  productId: number,
  galleryImage: string,
  title: string,
  price: number
}

const GalleryItem: FunctionComponent<IGalleryItem> = ({ productId, galleryImage, title, price }) => {
  return (
    <Link to={`/gallery-item/${productId}`} className="ProductLink">
      <div className="gallery-item">
        <img src={galleryImage} alt="Kelsey's Art" />
        <div className="gallery-item--info">
          <div className="gallery-item--title">{title}</div>
          <div className="gallery-item--price">${price}</div>
        </div>
      </div>
    </Link>
  );
};

export default GalleryItem;
