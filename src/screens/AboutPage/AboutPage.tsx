import React from "react";
import "./styles.scss";

const AboutPage = () => {
    return (
        <div className="about-page">
            <img
                src="https://s3-us-west-2.amazonaws.com/kelseylovesart/images/kelsey_drawing.jpg"
                className="about-page--image"
                alt="Kelsey drawing"
            />
            <article className="about-page--description">
                <h3>Welcome to Olyve Art!</h3>
                <p>
                    I'm Kelsey, an artist based in Ogden, Utah. I’ve been passionate about
                    art since I was 9 years old, and have continued to grow and create
                    since. <br />
                    <br />I consider myself to be an abstract artist, though I love
                    portraits and plant-life. My favorite mediums include acrylic, ink,
                    gesso, and colored pencil. I typically use canvas and thick drawing
                    paper for my pieces. <br />I have experimented with other mediums, but
                    tend to stick to my favorites when making new creations. <br />
                    <br />
                    I draw much of my inspiration from different musicians and the
                    beautiful Ogden valley. I can’t say how many times I’ve listened to a
                    new album on repeat and painted something fun. <br />
                    <br />I hope that my art inspires others, evokes emotion, and brings
                    joy to those who see it.
                </p>
            </article>
        </div>
    );
};

export default AboutPage;
