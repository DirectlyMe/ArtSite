import React, { Component } from "react";
import MediaQuery from "react-responsive";
import GalleryItemContainer from "../../containers/GalleryItemContainer/GalleryItemContainer";
import Footer from "../../components/Footer/Footer";


class GalleryItemPage extends Component {
  render() {
    return (
      <div>
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
