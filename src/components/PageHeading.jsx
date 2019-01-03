import React from "react";

const PageHeading = ({ text, size, marginTop }) => {
  return (
    <div
      style={{
        fontSize: size,
        fontFamily: "Dancing Script",
        textAlign: "center",
        fontWeight: 400,
        marginTop: `${marginTop}px`,
        marginBottom: "15px"
      }}>
      {text}
    </div>
  );
};

export default PageHeading;
