import React from "react";
import MediaQuery from "react-responsive";
import GalleryItemsContainer from "../../containers/GalleryItemsContainer/GalleryItemsContainer";
import Footer from "../../components/Footer/Footer";
import PageHeading from "../../components/PageHeading";

function GalleryPage() {
  return (
    <div>
      <MediaQuery query="(max-width: 899px)">
        <PageHeading text="Gallery" size={22} />
        <GalleryItemsContainer />
        <Footer />
      </MediaQuery>
      <MediaQuery query="(min-width: 900px)">
        <div></div>
      </MediaQuery>
    </div>
  );
}

export default GalleryPage;
