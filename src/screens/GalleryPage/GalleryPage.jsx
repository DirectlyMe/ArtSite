import React from "react";
import GalleryItemsContainer from "../../containers/GalleryItemsContainer/GalleryItemsContainer";
import Footer from "../../components/Footer/Footer";
import PageHeading from "../../components/PageHeading/PageHeading";

function GalleryPage() {
  return (
    <div>
      <PageHeading text="Gallery" />
      <GalleryItemsContainer />
      <Footer />
    </div>
  );
}

export default GalleryPage;
