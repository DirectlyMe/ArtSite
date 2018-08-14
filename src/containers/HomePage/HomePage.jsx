import React, { Component } from 'react';
import NavBarContainer from '../NavBarContainer/NavBarContainer';
import SlideShowContainer from '../SlideShowContainer/SlideShowContainer';
import LinkBox from '../../components/LinkBox/LinkBox';
import LineBreak from '../../components/LineBreak/LineBreak';
import Footer from "../../components/Footer/Footer";
import './styles.css';

class HomePage extends Component {
    render() { 
        return ( 
            <div>
                <NavBarContainer />
                <SlideShowContainer />
                <div className="Boxes">
                    <div className="Slogan">will art for food</div>
                    <LineBreak />
                    <LinkBox boxClass="WideBox" text={'Gallery'} route={'/gallery'} />
                    <div className="TwoBoxesInline">
                        <LinkBox boxClass="InlineBoxGreen" text={'Contact'} route={'/'} />
                        <LinkBox boxClass="InlineBoxYellow" text={'Merch'} route={'/'} />
                    </div>
                    <LinkBox boxClass="WideBoxPink" text={'Featured'} route={'/'} />
                    <LineBreak />
                </div>
                <Footer />
            </div>
        );
    }
}

export default HomePage;