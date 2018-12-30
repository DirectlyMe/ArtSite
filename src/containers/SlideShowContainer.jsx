import React, { Component } from "react";
import Context from "../Context";
import Slider from "../components/SlideShow/SlideShow";

class SlideShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideShowItems: []
    };
  }

  render() {
    if (
      this.state.slideShowItems !== undefined &&
      this.state.slideShowItems !== null
    ) {
      return <Slider products={this.context.galleryItems} />;
    } else {
      return <div>Couldn't get Images</div>;
    }
  }
}
SlideShowContainer.contextType = Context;

export default SlideShowContainer;
