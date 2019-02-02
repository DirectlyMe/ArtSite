import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const GalleryItem = ({ productId, galleryImage, title, price }) => {
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
