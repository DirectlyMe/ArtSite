import React from "react";
import ScrollerItem from "../ScrollerItem/ScollerItem";
import "./styles.scss";

const GalleryScroller = ({ galleryItems, height }) => {
  function generateItems() {
    const backgroundColors = ["FCFFB3", "8FD7E1", "AAFFE7", "FFC95F"];
    let index = 0;

    if (galleryItems.length > 0) {
      galleryItems = galleryItems.map((item, i) => {
        let color = backgroundColors[index];
        if (index === backgroundColors.length - 1) index = 0;
        index++;

        const printItems = item.types.filter(itemType => itemType.type === "Print");
        if (printItems.length > 0) {
          item.price = printItems[0].price;
        } else {
          item.price = item.types[0].price;
        }

        return (
          <ScrollerItem key={i} item={item} color={color} className="scroller-item" />
        );
      });

      return galleryItems;
    }

    return [];
  };

  const listItems = generateItems();
    
  return (
    <div style={{ overflow: "hidden" /* needed to hide scroll bar */ }}>
      <div className="scroller" style={{ height: height - 85 }}>
        {listItems}
      </div>
    </div>
  );
};

export default GalleryScroller;
