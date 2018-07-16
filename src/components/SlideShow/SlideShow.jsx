import React from 'react';
import './styles.css';

const SlideShow = ({ currentImage }) => {
    return ( 
        <div className="SlideShow">
            <img src={currentImage} alt="Kelsey's art" />
        </div>
    );
}

export default SlideShow;