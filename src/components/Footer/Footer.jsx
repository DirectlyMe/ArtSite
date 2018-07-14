import React from 'react';
import Iconbutton from '../IconButton/IconButton'
import { faInstagram } from '@fortawesome/fontawesome-free-brands';
import './styles.css';

const Footer = () => {
    return (  
        <div className="Footer">
            <div className="FooterElement">
                @2018 Kelsey Williams
            </div>
            <div>
                <div className="FooterElement">
                    <Iconbutton iconName={faInstagram} iconClass="InstagramIcon" />
                    Instagram
                </div>
            </div>
        </div>
    );
}

export default Footer;