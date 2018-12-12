import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const GalleryItem = ({ productId, galleryImage, description, title }) => {
  return (
    <Link to={`/gallery-item/${productId}`} className="ProductLink">
      <div className="GalleryItem">
        <img src={galleryImage} alt="Kelsey's Art" />
        <div className="GalleryTitle">{title}</div>
        <div className="GalleryDescription">{description}</div>
      </div>
    </Link>
  );
};

export default GalleryItem;
