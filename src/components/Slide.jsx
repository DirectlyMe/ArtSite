import React from 'react';

const styles = {
  slide: {
    display: "inline-block",
    margin: "20px 40px",
    borderRadius: "10px",
    boxShadow: "2px 2px 3px rgba(0,0,0,.5)",
    backgroundColor: "#fff",
    cursor: "pointer",
  },
  slideImage: {
    borderRadius: "10px 10px 0 0"
  },
  slideText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    padding: "10px 25px",
    fontFamily: "Dancing Script",
    fontSize: "26px"
  }
};

const Slide = ({image, text, price, height, width}) => {
  return (
    <div style={styles.slide}>
      <img src={image} alt="Featured Gallery Item" height={height} width={width} style={styles.slideImage} />
      <div style={styles.slideText}>
        <div>{text}</div>
        <div>${price}</div>
      </div>
    </div>
  );
};

export default Slide; 