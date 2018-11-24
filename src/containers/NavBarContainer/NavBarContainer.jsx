import React, { Component } from "react";
import MediaQuery from "react-responsive";
import NavMobile from "../../components/NavBar/NavBarMobile";
import NavDesktop from "../../components/NavBar/NavBarDesktop";
import GalleryContext from "../../GalleryContext";

export default class NavBarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpen: false,
    };
  }

  toggleDrawer = () => {
    console.log("Menu was clicked");
    this.setState({ isDrawerOpen: !this.state.isDrawerOpen });
  };

  updateCurrentPage = (page) => {
    this.setState({ currentPage: page });
  }

  render() {
    return (
      <div>
        <MediaQuery query="(max-width: 899px)">
          <NavMobile
            toggleDrawer={this.toggleDrawer}
            isDrawerOpen={this.state.isDrawerOpen}
          />
        </MediaQuery>
        <MediaQuery query="(min-width: 900px)">
          <NavDesktop />
        </MediaQuery>
      </div>
    );
  }
}
NavBarContainer.contextType = GalleryContext;
