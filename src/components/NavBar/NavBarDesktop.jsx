import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../../Context";
import GalleryScroller from "../GalleryScroller/GalleryScroller";
import "./desktopStyles.scss";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "Home"
    };
  }

  render() {
    return (
      <nav
        className="navbar"
        style={{
          height: this.context.height,
          width: this.context.width * 0.18
        }}
      >
        <div className="navbar-wrapper">
          <div className="page-selector">
            <Link to="/" className="page-link">
              Home
            </Link>
          </div>
          <GalleryScroller />
        </div>
      </nav>
    );
  }
}
NavBar.contextType = Context;

export default NavBar;
