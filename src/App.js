import React, { Component, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faCamera,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faUndo } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/fontawesome-free-brands";
import LoadingSpinner from "./components/LoadingSpinner";
import GalleryContext from "./GalleryContext";
import HomePage from "./screens/HomePage/HomePage";
import CartPage from "./screens/CartPage/CartPage";
import NavBar from "./containers/NavBarContainer/NavBarContainer";
import { getGalleryItems } from "./api/GalleryCalls";
import "./App.css";
import NavBarContainer from "./containers/NavBarContainer/NavBarContainer";

const GalleryPage = lazy(() => import("./screens/GalleryPage/GalleryPage"));
const GalleryItemPage = lazy(() =>
  import("./screens/GalleryItemPage/GalleryItemPage")
);

library.add(faBars, faCamera, faShoppingCart, faInstagram, faCircle, faUndo);

class App extends Component {
  constructor() {
    super();
    this.state = {
      galleryItems: [],
      currentPage: "Home"
    };
  }

  componentDidMount = async () => {
    const items = await getGalleryItems();
    this.setState({ galleryItems: items });
  };

  render() {
    return (
      <GalleryContext.Provider value={this.state}>
        <div className="app">
          <NavBarContainer />
          <Route exact path="/" component={HomePage} />
          <Suspense fallback={<LoadingSpinner />} delayMS={1000}>
            <Route path="/gallery" component={GalleryPage} />
            <Route path="/galleryitem/:id" component={GalleryItemPage} />
          </Suspense>
          <Route path="/cart" component={CartPage} />
        </div>
      </GalleryContext.Provider>
    );
  }
}

export default App;
