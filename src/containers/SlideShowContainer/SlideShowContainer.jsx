import React, { Component, lazy, Suspense } from "react";
import GalleryContext from "../../GalleryContext";
import LoadingSpinner from "../../components/LoadingSpinner";
const Slider = lazy(() => import("../../components/SlideShow/SlideShow"));

class SlideShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideShowItems: []
    };
  }

  componentDidMount() {
    this.getSlideShowItems();
  }

  componentDidUpdate(prevProps) {
    if (prevProps === this.props) return;
    
    this.getSlideShowItems();
  }

  getSlideShowItems = () => {
    const { galleryItems } = this.context;
    this.setState({ slideShowItems: galleryItems });
  };

  render() {
    if (
      this.state.slideShowItems !== undefined &&
      this.state.slideShowItems !== null
    ) {
      return (
        <Suspense fallback={<LoadingSpinner />}>
          <Slider products={this.state.slideShowItems} />
        </Suspense>
      );
    } else {
      return <div>Couldn't get Images</div>;
    }
  }
}
SlideShowContainer.contextType = GalleryContext;

export default SlideShowContainer;
