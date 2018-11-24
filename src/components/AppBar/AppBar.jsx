import React from "react";
import { Link } from "react-router-dom";
import IconButton from "../IconButton/IconButton";
import "./styles.css";

const AppBar = ({ cartFunc, toggleDrawer }) => {
  return (
    <div className="AppBar">
      <Link className="heading" to="/">
        Kelsey Loves Art
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
