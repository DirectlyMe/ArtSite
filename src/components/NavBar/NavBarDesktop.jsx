import React, { Component, Suspense, lazy } from "react";
import Context from "../../Context";
import PageDropDown from "../PageDropDown/PageDropDown";
import LoadingSpinner from "../LoadingSpinner";

import "./desktopStyles.scss";
const GalleryScroller = lazy(() =>
  import("../GalleryScroller/GalleryScroller")
);

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "Home",
    };
  }

  render() {
    return (
      <nav className="navbar" style={{ height: this.context.height, width: this.context.width * .18 }}>
        <div className="navbar-wrapper">
          <PageDropDown currentPage={this.state.currentPage} />
          <Suspense fallback={<LoadingSpinner />} >
            <GalleryScroller />
          </Suspense>
        </div>
      </nav>
    );
  }
}
NavBar.contextType = Context;

export default NavBar;
