import React, { Component } from "react";
import GalleryContext from "../../GalleryContext";
import ScrollerItem from "../ScollerItem";
import "./styles.scss";

class GalleryScroller extends Component {
  generateItems = () => {
    const backgroundColors = ["FCFFB3", "8FD7E1", "AAFFE7", "FFC95F"];
    let index = 0;
    let { galleryItems } = this.context;

    if (galleryItems.length > 0) {
      galleryItems = this.context.galleryItems.map((item, i) => {
        let color = backgroundColors[index];
        if (index === backgroundColors.length - 1) index = 0;
        index++;
  
        return <ScrollerItem key={i} item={item} color={color} />;
      });
      
      return galleryItems;
    }
    return [];
  }

  render() {
    const galleryItems = this.generateItems();
    return (
      <div style={{ overflow: "hidden" /* needed to hide scrollbar */ }}>
        <div className="scroller" style={{ height: this.context.height - 114 }}>
          {galleryItems}
        </div>
      </div>
    );
  }
}
GalleryScroller.contextType = GalleryContext;

export default GalleryScroller;
