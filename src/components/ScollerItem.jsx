import React from "react";

const ScrollerItem = ({ item }) => {
  return (
    <div>
      <img style={{ borderRadius: "10px" }} alt="something" src={item.images[2]} width="80%" hieght="10%" />
      <div style={{ boxSizing: "border-box" }}>{item.title}</div>
    </div>
  );
};

export default ScrollerItem;
