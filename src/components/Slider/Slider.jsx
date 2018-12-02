import React, { Component } from "react";
import Slide from "../Slide";
import { ReactComponent as RightArrow } from "../../images/RightArrow.svg";
import { ReactComponent as LeftArrow } from "../../images/LeftArrow.svg";
import Context from "../../Context";
import "./styles.scss";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderHeight: 0,
      currentIndex: 0,
      translateValue: 0,
      slides: []
    };
  }

  componentDidMount() {
    let { galleryItems } = this.context;
    if (galleryItems.length > 0) {
      this.generateSlides(galleryItems);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps === this.props) return;

    let { galleryItems } = this.context;
    if (galleryItems.length > 0) {
      this.generateSlides(galleryItems);
    }
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) {
      return;
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.context.width * 0.82
    }));
  };

  goToNextSlide = () => {
    if (this.state.currentIndex === this.state.slides.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.context.width * 0.82
    }));
  };

  generateSlides = sliderItems => {
    const windowWidth = this.context.width;
    let width = 0;
    let slideHeight = 0;
    let sliderHeight = 0;
    let numItems = 0;

    if (windowWidth <= 1200) {
      width = 500;
      slideHeight = 390;
      sliderHeight = 470;
      numItems = 1;
    } else if (windowWidth <= 1500) {
      width = 380;
      slideHeight = 350;
      sliderHeight = 430;
      numItems = 2;
    } else {
      slideHeight = 370;
      width = 390;
      sliderHeight = 460;
      numItems = 3;
    }

    let slides = [];
    for (let i = 0; i < sliderItems.length; i += numItems) {
      const slide = (
        <div className="slide-grouping-wrapper">
          <Slide
            image={sliderItems[i].images[0]}
            text={sliderItems[i].title}
            price={sliderItems[i].price}
            height={slideHeight}
            width={width}
          />
          {i + 1 !== sliderItems.length && numItems > 1 ? (
            <Slide
              image={sliderItems[i + 1].images[3]}
              text={sliderItems[i + 1].title}
              price={sliderItems[i + 1].price}
              height={slideHeight}
              width={width}
            />
          ) : null}
          {i + 2 !== sliderItems.length && numItems > 2 ? (
            <Slide
              image={sliderItems[i + 1].images[1]}
              text={sliderItems[i + 1].title}
              price={sliderItems[i + 1].price}
              height={slideHeight}
              width={width}
            />
          ) : null}
        </div>
      );
      slides.push(slide);
    }

    this.setState({ slides, sliderHeight });
  };

  render() {
    const { slides, sliderHeight } = this.state;

    return (
      <div className="slider" style={{ height: sliderHeight }}>
        <div
          className="slides-wrapper"
          style={{
            // image transition animation
            transform: `translateX(${this.state.translateValue}px)`,
            transition: "transform ease-out 0.70s"
          }}
        >
          {slides}
        </div>
        <LeftArrow className="left-arrow" onClick={this.goToPrevSlide} />
        <RightArrow className="right-arrow" onClick={this.goToNextSlide} />
      </div>
    );
  }
}
Slider.contextType = Context;

export default Slider;
