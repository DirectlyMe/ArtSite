import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Slide = ({ image, text, price, height, width, link }) => {
  return (
    <Link to={`/gallery-item/${link}`} className="page-link">
      <div className="slide">
        <img
          src={image}
          alt="Featured Gallery Item"
          height={height}
          width={width}
          className="slide-image"
        />
        <div className="slide-text">
          <div>{text}</div>
          <div>${price}</div>
        </div>
      </div>
    </Link>
  );
};

export default Slide;
