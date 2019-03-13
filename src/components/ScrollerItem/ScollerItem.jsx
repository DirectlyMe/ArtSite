import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../Context";
import "./styles.scss";

const ScrollerItem = ({ item, color }) => {
  const context = useContext(Context);

    return (
        <Link to={`/gallery-item/${item.product_id}`} className="page-link" style={{ width: context.width * .18 }}>
            <div className="scroller-item">
                <img alt="something" src={item.images[0]} width={ context.width * .18 } />
                <div className="price-title" style={{ backgroundColor: `#${color}` }}>
                    <div className="title">{item.title}</div>
                    <div>${item.price}</div>
                </div>
            </div>
        </Link>
    );
};

export default ScrollerItem;
