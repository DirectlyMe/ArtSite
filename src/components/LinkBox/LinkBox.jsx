import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const LinkBox = ({ boxClass, text, route }) => {
    return ( 
        <div className={boxClass}>
            <Link to={route} className="LinkBox">
                {text}
            </Link>
        </div>
    );
}

export default LinkBox;