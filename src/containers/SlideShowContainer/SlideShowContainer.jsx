import React, { Component } from 'react';
import SlideShow from '../../components/SlideShow/SlideShow'
import Iconbutton from '../../components/IconButton/IconButton';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import './styles.css';

class SlideShowContainer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="SlideShowContainer">
                <SlideShow />
                <ul>
                    <li><Iconbutton iconName={faCircle} iconClass="Circle" /></li>
                    <li><Iconbutton iconName={faCircle} iconClass="Circle" /></li>
                    <li><Iconbutton iconName={faCircle} iconClass="Circle" /></li>
                </ul>
            </div>
        );
    }
}

export default SlideShowContainer;