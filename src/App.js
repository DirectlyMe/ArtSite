import React, { Component } from "react";
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
import GalleryContext from "./GalleryContext";
import HomePage from "./screens/HomePage/HomePage";
import GalleryPage from "./screens/GalleryPage/GalleryPage";
import GalleryItemPage from "./screens/GalleryItemPage/GalleryItemPage";
import CartPage from "./screens/CartPage/CartPage";
import { getGalleryItems } from "./api/GalleryCalls";
import "./App.css";

library.add(faBars, faCamera, faShoppingCart, faInstagram, faCircle, faUndo);

class App extends Component {
  constructor() {
    super();

    this.state = {
      galleryItems: [],
      testing: 0
    };
  }

  componentDidMount = async () => {
    const items = await getGalleryItems();

    this.setState({ galleryItems: items });
  };

  render() {
    return (
      <GalleryContext.Provider value={this.state}>
        <Route exact path="/" component={HomePage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route path="/galleryitem/:id" component={GalleryItemPage} />
        <Route path="/cart" component={CartPage} />
      </GalleryContext.Provider>
    );
  }
}

export default App;
