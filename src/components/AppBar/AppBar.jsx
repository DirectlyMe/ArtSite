import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as OlyveIcon } from "../../images/OlyveIcon.svg";
import SearchBar from "../SearchBar/SearchBar";
import IconButton from "../IconButton";
import Context from "../../Context";
import "./styles.scss";

const AppBar = ({ toggleDrawerFunc, isSearchExpanded, searchBarToggleFunc }) => {
	const context = useContext(Context);

    return (
        <div className="appbar">
            <div className="appbar--logo">
                <OlyveIcon className="appbar--logo-icon" />
                <Link className="appbar--logo-title" to="/">
                    Olyve Art
                </Link>
            </div>
            <div className="icons">
                <FontAwesomeIcon
                    icon="search"
                    className="search-icon"
                    onClick={searchBarToggleFunc}
                />
                <Link to="/cart" className="cartLink">
                    <IconButton iconName={"shopping-cart"} iconClass="cartIcon" />
                </Link>
                <IconButton
                    iconName={"bars"}
                    iconClass="menuIcon"
                    iconClick={toggleDrawerFunc}
                />
                {isSearchExpanded ? (
                    <SearchBar
                        galleryItems={context.galleryItems}
                        className="navbar--search-bar"
                        searchBarToggleFunc={searchBarToggleFunc}
                    />
                ) : null}
            </div>
        </div>
    );
};

export default AppBar;
