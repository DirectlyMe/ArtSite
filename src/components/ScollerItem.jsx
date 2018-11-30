import React from "react";

const ScrollerItem = ({ item, color }) => {
  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <img
        style={{ borderRadius: "10px" }}
        alt="something"
        src={item.images[0]}
        width="80%"
        height="200px"
      />
      <div
        style={{
          boxSizing: "border-box",
          padding: "10px",
          margin: "2px 30px 15px 30px",
          borderRadius: "10px",
          backgroundColor: `#${color}`,
          fontFamily: "'Lato', sans-serif"
        }}>
        {item.title}
      </div>
    </div>
  );
};

export default ScrollerItem;
