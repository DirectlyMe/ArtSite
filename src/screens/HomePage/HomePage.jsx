import React, { Component } from "react";
import MediaQuery from "react-responsive";
import NavBarContainer from "../../containers/NavBarContainer/NavBarContainer";
import SlideShowContainer from "../../containers/SlideShowContainer/SlideShowContainer";
import LinkBox from "../../components/LinkBox/LinkBox";
import LineBreak from "../../components/LineBreak";
import Footer from "../../components/Footer/Footer";
import "./styles.css";

class HomePage extends Component {
  render() {
    return (
      <div>
        <NavBarContainer />
        <MediaQuery query="(max-width: 900px)>">
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
        <MediaQuery query="(max-width: 901px)">
          <div>
            
          </div>
        </MediaQuery>
      </div>
    );
  }
}

export default HomePage;
