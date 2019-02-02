import React, { Component } from "react";
import Context from "../Context";
import Slider from "../components/SlideShow/SlideShow";

class SlideShowContainer extends Component {
  render() {
    if (
      this.context.featuredItems !== undefined &&
      this.context.featuredItems !== null
    ) {
      return <Slider products={this.context.featuredItems} />;
    } else {
      return <div>Couldn't get Images</div>;
    }
  }
}
SlideShowContainer.contextType = Context;

export default SlideShowContainer;
