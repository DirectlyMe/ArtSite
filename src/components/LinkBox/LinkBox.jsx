import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "./styles.scss";

const LinkBox = ({ boxClass, text, route }) => {
    return (
        <Link to={route} className="LinkBox">
            <div className={classNames(boxClass, "LinkBox")}>{text}</div>
        </Link>
    );
};

export default LinkBox;
