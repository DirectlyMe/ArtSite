import React, { Component } from "react";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import AppBar from "../../components/AppBar/AppBar";
import Drawer from "../../components/Drawer/Drawer";
import NavDesktop from "../../components/NavBar/NavBarDesktop";
import IconButton from "../../components/IconButton/IconButton";
import Context from "../../Context";
import "./styles.scss";

export default class NavBarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpen: false
    };

    this.drawer = React.createRef();
  }

  openDrawer = event => {
    event.preventDefault();
    console.log(this.drawer.current);

    this.setState({ isDrawerOpen: true }, () => {
      console.log("adding event listener");
      document.addEventListener("click", this.closeMenu);
    });
  };

  closeMenu = event => {
    const node = this.drawer.current;
    if (node) {
      console.log(node);
      if (!node.contains(event.target)) {
        this.setState({ isDrawerOpen: false }, () => {
          document.removeEventListener("click", this.closeMenu);
        });
      }
    }
  };

  updateCurrentPage = page => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <div className="nav-width">
        <MediaQuery query="(max-width: 899px)">
          <div style={{ width: "100%", zIndex: 999 }}>
            <AppBar toggleDrawer={this.openDrawer} />
            <Drawer
              isDrawerOpen={this.state.isDrawerOpen}
              ref={this.drawer}
              closeMenu={this.closeMenu}
            />
          </div>
        </MediaQuery>
        <MediaQuery query="(min-width: 900px)">
          <NavDesktop />
          <Link to="/cart" className="cartLink">
            <IconButton iconName={"shopping-cart"} iconClass="cartIcon" />
          </Link>
        </MediaQuery>
      </div>
    );
  }
}
NavBarContainer.contextType = Context;
