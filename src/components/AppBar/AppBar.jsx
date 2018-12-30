import React from "react";
import { Link } from "react-router-dom";
import IconButton from "../IconButton";
import "./styles.scss";

const AppBar = ({ toggleDrawer }) => {
  return (
    <div className="AppBar">
      <Link className="heading" to="/">
        Olyve Art
      </Link>
      <div className="icons">
        <Link to="/cart" className="cartLink">
          <IconButton iconName={"shopping-cart"} iconClass="cartIcon" />
        </Link>
        <IconButton
          iconName={"bars"}
          iconClass="menuIcon"
          iconClick={toggleDrawer}
        />
      </div>
    </div>
  );
};

export default AppBar;
