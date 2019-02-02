import React, { Component } from "react";
import Slide from "../DesktopSlide/DesktopSlide";
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
      arrowPosition: "",
      slides: []
    };
  }

  componentDidMount() {
    let { featuredItems } = this.context;
    if (featuredItems.length > 0) {
      this.generateSlides(featuredItems);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      let { featuredItems } = this.context;
      if (featuredItems.length > 0) {
        this.generateSlides(featuredItems);
      }
    }
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) 
      return;

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.context.width * 0.81
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
      translateValue: prevState.translateValue + -this.context.width * 0.81
    }));
  };

  generateSlides = sliderItems => {
    const windowWidth = this.context.width;
    let width = 0;
    let slideHeight = 0;
    let sliderHeight = 0;
    let numItems = 0;
    let position = "";

    if (windowWidth <= 1200) {
      width = 500;
      slideHeight = 390;
      sliderHeight = 470;
      numItems = 1;
      position = "7%";
    } else if (windowWidth <= 1800) {
      width = 380;
      slideHeight = 330;
      sliderHeight = 410;
      numItems = 2;
      position = "5%";
    } else {
      slideHeight = 370;
      width = 390;
      sliderHeight = 460;
      numItems = 3;
      position = "1%";
    }

    let slides = [];
    
    for (let i = 0; i < sliderItems.length; i += numItems) {
      const slide = (
        <div key={i} className="slide-grouping-wrapper">
          <Slide
            key={i}
            image={sliderItems[i].images[0]}
            text={sliderItems[i].title}
            price={sliderItems[i].types[0].price}
            height={slideHeight}
            width={width}
            link={sliderItems[i].product_id}
          />
          { i + 1 < sliderItems.length && numItems > 1 ? (
            <Slide
              key={i+1}
              image={sliderItems[i + 1].images[0]}
              text={sliderItems[i + 1].title}
              price={sliderItems[i + 1].types[0].price}
              height={slideHeight}
              width={width}
              link={sliderItems[i + 1].product_id}
            />
          ) : null}
          { i + 2 < sliderItems.length && numItems > 2 ? (
            <Slide
              key={i+2}
              image={sliderItems[i + 2].images[0]}
              text={sliderItems[i + 2].title}
              price={sliderItems[i + 2].types[0].price}
              height={slideHeight}
              width={width}
              link={sliderItems[i + 2].product_id}
            />
          ) : null}
        </div>
      );
      slides.push(slide);
    }

    this.setState({ slides, sliderHeight, arrowPosition: position });
  };

  render() {
    const { slides, sliderHeight } = this.state;

    return <div className="desktop-slider" style={{ height: sliderHeight }}>
        <div className="slides-wrapper" style={{ // image transition animation
            transform: `translateX(${this.state.translateValue}px)`, transition: "transform ease-out 0.70s" }}>
          {slides}
        </div>
        <LeftArrow className="left-arrow" style={{ left: this.state.arrowPosition }} onClick={this.goToPrevSlide} />
        <RightArrow className="right-arrow" style={{ right: this.state.arrowPosition }}  onClick={this.goToNextSlide} />
      </div>;
  }
}
Slider.contextType = Context;

export default Slider;
