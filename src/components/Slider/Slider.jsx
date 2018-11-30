import React, { Component } from "react";
import Slide from "../Slide";
import GalleryContext from "../../GalleryContext";
import "./styles.scss";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      translateValue: 0,
      slides: []
    };
  }

  componentDidMount() {
    let { galleryItems } = this.context;
    if (galleryItems.length > 0) {
      this.generateSlides(galleryItems, 2);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps === this.props) return;

    let { galleryItems } = this.context;
    if (galleryItems.length > 0) {
      this.generateSlides(galleryItems, 2);
    }
  }

  generateSlides = (sliderItems, numItems) => {
    let slides = [];
    for (let i = 0; i < sliderItems.length; i += numItems) {
      const slide = (
        <div>
          <Slide
            image={sliderItems[i].images[0]}
            text={sliderItems[i].description}
            height={400}
            width={370}
          />
          {i + 1 !== sliderItems.length && numItems > 1 ? (
            <Slide
              image={sliderItems[i + 1].images[3]}
              text={sliderItems[i + 1].description}
              height={400}
              width={370}
            />
          ) : null}
          {i + 2 !== sliderItems.length && numItems > 2 ? (
            <Slide
              image={sliderItems[i + 1].images[1]}
              text={sliderItems[i + 1].description}
              height={400}
              width={370}
            />
          ) : null}
        </div>
      );
      slides.push(slide);
    }

    this.setState({ slides });
  };

  render() {
    const { slides } = this.state;

    return (
      <div className="slider">
        <div className="slides-wrapper">{slides}</div>
      </div>
    );
  }
}
Slider.contextType = GalleryContext;

export default Slider;
