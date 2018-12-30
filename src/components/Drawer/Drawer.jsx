import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "./styles.scss";

const Drawer = React.forwardRef((props, ref) => {
  return <div className={classNames("Drawer", {
        ["DrawerOpen"]: props.isDrawerOpen // eslint-disable-line
      })} ref={ref}>
      <Link to="/" className="item" onClick={() => props.navSelectedFunc()}>
        Home
      </Link>
      <Link to="/gallery" className="item" onClick={() => props.navSelectedFunc()}>
        Gallery
      </Link>
    <Link to="/cart" className="item" onClick={() => props.navSelectedFunc()}>
        Cart
      </Link>
    </div>;
});

export default Drawer;
