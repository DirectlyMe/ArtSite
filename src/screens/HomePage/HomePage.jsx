import React, { Component } from "react";
import MediaQuery from "react-responsive";
import Slider from "../../components/DesktopSlider/Slider";
import Context from "../../Context";
import SlideShowContainer from "../../containers/SlideShowContainer";
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
                    <div style={{ marginTop: "55px" }}>
                        <SlideShowContainer />
                        <div className="Boxes">
                            <div className="Slogan">will art for food</div>
                            <LineBreak />
                            <LinkBox
                                boxClass="WideBox"
                                text="Gallery"
                                route={"/gallery"}
                            />
                            <LinkBox
                                boxClass="WideBoxSecond"
                                text="About"
                                route={"/about"}
                            />
                            <LineBreak />
                        </div>
                        <Footer />
                    </div>
                </MediaQuery>
                <MediaQuery query="(min-width: 900px)">
                    <div
                        style={{
                            width: width * 0.81,
                            height: height
                        }}
                        className="home-content"
                    >
                        <PageHeading text="Featured" size={48} marginTop={60} />
                        <Slider />
                        <PageHeading text="About Me" size={40} marginTop={45} />
                        <div className="about-me-wrapper">
                            <article className="about-me">
                                <h6>Welcome to Olyve Art!</h6>
                                <p>
                                    I'm Kelsey, an artist based in Ogden, Utah. I’ve been
                                    passionate about art since I was 9 years old, and have
                                    continued to grow and create since. <br />
                                    <br />I consider myself to be an abstract artist,
                                    though I love portraits and plant-life. My favorite
                                    mediums include acrylic, ink, gesso, and colored
                                    pencil. I typically use canvas and thick drawing paper
                                    for my pieces. <br />I have experimented with other
                                    mediums, but tend to stick to my favorites when making
                                    new creations. <br />
                                    <br />
                                    I draw much of my inspiration from different musicians
                                    and the beautiful Ogden valley. I can’t say how many
                                    times I’ve listened to a new album on repeat and
                                    painted something fun. <br />
                                    <br />I hope that my art inspires others, evokes
                                    emotion, and brings joy to those who see it.
                                </p>
                            </article>
                            <img
                                src="https://s3-us-west-2.amazonaws.com/kelseylovesart/images/kelsey_drawing.jpg"
                                className="about-me--image"
                                alt="kelsey drawing"
                            />
                        </div>
                    </div>
                    <Footer width={width * 0.82} />
                </MediaQuery>
            </div>
        );
    }
}
HomePage.contextType = Context;

export default HomePage;
