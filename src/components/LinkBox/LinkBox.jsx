import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "./styles.scss";

const LinkBox = ({ boxClass, text, route }) => {
  return (
    <div className={classNames(boxClass, "LinkBox")}>
      <Link to={route} className="LinkBox">
        {text}
      </Link>
    </div>
  );
};

export default LinkBox;
