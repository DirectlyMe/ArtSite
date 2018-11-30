import React from "react";

const PageHeading = ({ text, size, paddingTop }) => {
  return (
    <div
      style={{
        fontSize: size,
        fontFamily: "Dancing Script",
        textAlign: "center",
        fontWeight: 400,
        paddingTop: paddingTop,
        paddingBottom: 10
      }}>
      {text}
    </div>
  );
};

export default PageHeading;
