import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const ScrollerItem = ({ item, color }) => (
  <Link to={`/gallery-item/${item.product_id}`} className="page-link">
    <div className="scroller-item">
      <img alt="something" src={item.images[0]} width="80%" />
      <div className="price-title" style={{ backgroundColor: `#${color}` }}>
        <div className="title">{item.title}</div>
        <div>${item.price}</div>
      </div>
    </div>
  </Link>
);

export default ScrollerItem;
