import React, { Component } from "react";
import MediaQuery from "react-responsive";
import SlideShowContainer from "../../containers/SlideShowContainer/SlideShowContainer";
import LinkBox from "../../components/LinkBox/LinkBox";
import LineBreak from "../../components/LineBreak";
import Footer from "../../components/Footer/Footer";
import "./styles.css";

class HomePage extends Component {
  render() {
    return (
      <div>
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
          <div style={{ width: "82%", justifyContent: "center" }}>
            Hello There
          </div>
        </MediaQuery>
      </div>
    );
  }
}

export default HomePage;
