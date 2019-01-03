import React from "react";
import GalleryItemsContainer from "../../containers/GalleryItemsContainer";
import Footer from "../../components/Footer/Footer";
import PageHeading from "../../components/PageHeading";

function GalleryPage() {
  return (
    <div>
      <PageHeading text="Gallery" size={30} marginTop={80} />
      <GalleryItemsContainer />
      <Footer />
    </div>
  );
}

export default GalleryPage;
