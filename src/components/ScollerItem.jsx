import React from "react";

const ScrollerItem = ({ item, color }) => {
  return (
    <div>
      <img
        style={{ borderRadius: "10px", boxShadow: "2px 3px 3px rgba(0,0,0,.5)", }}
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
          boxShadow: "2px 3px 3px rgba(0,0,0,.5)",
          backgroundColor: `#${color}`,
          fontFamily: "'Lato', sans-serif"
        }}>
        {item.title}
      </div>
    </div>
  );
};

export default ScrollerItem;
