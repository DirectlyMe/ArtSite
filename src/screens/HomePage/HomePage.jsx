import React, { Component } from "react";
import MediaQuery from "react-responsive";
import Slider from "../../components/Slider/Slider";
import Context from "../../Context";
import SlideShowContainer from "../../containers/SlideShowContainer/SlideShowContainer";
import LinkBox from "../../components/LinkBox/LinkBox";
import LineBreak from "../../components/LineBreak";
import Footer from "../../components/Footer/Footer";
import PageHeading from "../../components/PageHeading";
import "./styles.scss";

class HomePage extends Component {
  render() {
    const { width, height } = this.context;
    return (
      <div className="home-screen-desktop">
        <MediaQuery query="(max-width: 899px)">
          <SlideShowContainer />
          <div className="Boxes">
            <div className="Slogan">will art for food</div>
            <LineBreak />
            <LinkBox boxClass="WideBox" text={"Gallery"} route={"/gallery"} />
            <div className="TwoBoxesInline">
              <LinkBox boxClass="InlineBoxGreen" text={"Contact"} route={"/"} />
              <LinkBox boxClass="InlineBoxYellow" text={"Merch"} route={"/"} />
            </div>
            <LinkBox boxClass="WideBoxPink" text={"Featured"} route={"/"} />
            <LineBreak />
          </div>
          <Footer />
        </MediaQuery>
        <MediaQuery query="(min-width: 900px)">
          <div
            style={{
              width: width * 0.82,
              height: height
            }}
            className="content">
            <div>
              <PageHeading text="Featured" size={40} marginTop={30} />
                <Slider />
            </div>
          </div>
        </MediaQuery>
      </div>
    );
  }
}
HomePage.contextType = Context;

export default HomePage;
