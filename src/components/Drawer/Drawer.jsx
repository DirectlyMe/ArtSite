import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "./styles.scss";

const Drawer = React.forwardRef((props, ref) => {
  return (
    <div
      className={classNames("Drawer", {
        ["DrawerOpen"]: props.isDrawerOpen // eslint-disable-line
      })}
      ref={ref}
    >
      <Link to="/" className="item">
        Home
      </Link>
      <Link to="/gallery" className="item">
        Gallery
      </Link>
      <Link to="/" className="item">
        Merch
      </Link>
      <Link to="/cart" className="item">
        Cart
      </Link>
    </div>
  );
});

export default Drawer;
