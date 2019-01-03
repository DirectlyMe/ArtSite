import React, { Component } from "react";
import { Link } from "react-router-dom";
import GalleryScroller from "../GalleryScroller/GalleryScroller";
import { ReactComponent as OlyveIcon } from "../../images/OlyveIcon.svg";
import Context from "../../Context";
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
          <Link to="/" className="page-link">
            <div className="page-selector">
              <OlyveIcon className="navbar--logo" />
              <div className="navbar--home">Olyve Art</div>
            </div>
          </Link>
          <GalleryScroller />
        </div>
      </nav>
    );
  }
}
NavBar.contextType = Context;

export default NavBar;
