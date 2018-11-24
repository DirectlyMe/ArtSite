import React, { Component } from "react";
import MediaQuery from "react-responsive";
import NavBarContainer from "../../containers/NavBarContainer/NavBarContainer";
import GalleryItemContainer from "../../containers/GalleryItemContainer/GalleryItemContainer";
import Footer from "../../components/Footer/Footer";


class GalleryItemPage extends Component {
  state = {};

  render() {
    return (
      <div>
        <NavBarContainer />
        <MediaQuery query="(max-width: 899px)">
          <GalleryItemContainer id={this.props.match.params.id} />
          <Footer />
        </MediaQuery>
        <MediaQuery query="(min-width: 900)">
          <GalleryItemContainer id={this.props.match.params.id} />
        </MediaQuery>
      </div>
    );
  }
}

export default GalleryItemPage;
