import React, { Component } from 'react';
import NavBarContainer from '../NavBarContainer/NavBarContainer'
import SlideShowContainer from '../SlideShowContainer/SlideShowContainer'
import LinkBox from '../../components/LinkBox/LinkBox'
import Footer from "../../components/Footer/Footer";
import './styles.css';

class HomePage extends Component {
    render() { 
        return ( 
            <div>
                <NavBarContainer />
                <SlideShowContainer />
                <div className="Slogan">will art for food</div>
                <hr className="Linebreak" />
                <LinkBox boxClass="WideBox" text={'Gallery'} route={'/Gallery'} />
                <div className="TwoBoxesInline">
                    <LinkBox boxClass="InlineBoxGreen" text={'Contact'} route={'/'} />
                    <LinkBox boxClass="InlineBoxYellow" text={'Merch'} route={'/'} />
                </div>
                <LinkBox boxClass="WideBox" text={'Featured'} route={'/'} />
                <hr className="Linebreak" />
                <Footer />
            </div>
        );
    }
}

export default HomePage;