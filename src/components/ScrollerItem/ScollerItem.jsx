import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const ScrollerItem = ({ item, color }) => {
  return (
    <Link to={`/gallery-item/${item._id}`} className="page-link">    
      <div className="scroller-item">
        <img
          style={{ borderRadius: "10px" }}
          alt="something"
          src={item.images[0]}
          width="80%"
          height="150px"
        />
        <div
          className="price-title"
          style={{ backgroundColor: `#${color}` }}
        >
          <div>{item.title}</div>
          <div>${item.price}</div>
        </div>
      </div>
    </Link>
  );
};

export default ScrollerItem;
