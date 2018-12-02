import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./styles.css";

const SlideShow = ({ products }) => {
  return (
    <Slider className="slider-wrapper">
      {products.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{
            background: `url('${item.images[0]}') no-repeat center center`
          }}>
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <button>
              <Link className="itemLink" to={`gallery-item/${item._id}`}>
                View
              </Link>
            </button>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SlideShow;
