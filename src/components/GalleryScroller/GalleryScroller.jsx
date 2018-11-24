import React, { Component, Suspense, lazy } from "react";
import GalleryContext from "../../GalleryContext";
import "./styles.scss";

const ScrollerItem = lazy(() => import("../ScollerItem"));

class GalleryScroller extends Component {
  render() {
    const galleryItems = this.context.galleryItems.map(item => (
      <Suspense key={item.title} fallback={<div>loading...</div>}>
        <ScrollerItem item={item} />
      </Suspense>
    ));
    
    return (
      <div style={{ overflow: "hidden" /* needed to hide scrollbar */ }}>
        <div className="scroller" style={{ height: window.innerHeight - 120 }}>
          {galleryItems}
        </div>
      </div>
    );
  }
}
GalleryScroller.contextType = GalleryContext;

export default GalleryScroller;
