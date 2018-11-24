import React, { Component, Suspense, lazy } from "react";
import PageDropDown from "../PageDropDown/PageDropDown";
import "./desktopStyles.scss";
const GalleryScroller = lazy(() =>
  import("../GalleryScroller/GalleryScroller")
);

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "Home",
      width: 0,
      height: 0
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  render() {
    return (
      <nav className="navbar" style={{ height: this.state.height }}>
        <div className="navbar-wrapper">
          <PageDropDown currentPage={this.state.currentPage} />
          <Suspense fallback={<div>Loading...</div>}>
            <GalleryScroller />
          </Suspense>
        </div>
      </nav>
    );
  }
}

export default NavBar;
