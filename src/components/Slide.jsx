import React from 'react';

const styles = {
  slide: {
    display: "inline-block",
    margin: "20px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "2px 2px 3px rgba(0,0,0,.5)",
  },
  slideImage: {
    borderRadius: "10px 10px 0 0"
  },
  slideText: {
    padding: "14px 0px"
  }
};

const Slide = ({image, text, height, width}) => {
  return (
    <div style={styles.slide}>
      <img src={image} alt="Featured Gallery Item" height={height} width={width} style={styles.slideImage} />
      <div style={styles.slideText}>
        {text}
      </div>
    </div>
  );
};

export default Slide; 