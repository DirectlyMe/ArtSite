import React from 'react';
import { Link } from 'react-router-dom'
import classNames from 'classnames';
import './styles.css';

const Drawer = ({ isDrawerOpen }) => {
    return (  
        <div className={classNames("Drawer", { ["DrawerOpen"]: isDrawerOpen })}> 
            <Link to="/" className="item">Home</Link>
            <Link to="/Gallery" className="item">Gallery</Link>
            <Link to="/" className="item">Merch</Link>
            <Link to="/Cart" className="item">Cart</Link>
        </div>
    );
}

export default Drawer;