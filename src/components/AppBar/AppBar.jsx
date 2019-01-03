import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as OlyveIcon } from "../../images/OlyveIcon.svg";
import IconButton from "../IconButton";
import "./styles.scss";

const AppBar = ({ toggleDrawer }) => {
  return (
    <div className="appbar">
      <div className="appbar--logo">
        <OlyveIcon className="appbar--logo-icon" />
        <Link className="appbar--logo-title" to="/">
          Olyve Art
        </Link>
      </div>
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
