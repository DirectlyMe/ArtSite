import React, { Component, lazy, Suspense } from "react";
import { Route, Redirect } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faCamera,
  faShoppingCart,
  faUndo,
  faSearch,
  faPlus,
  faMinus,
  faAngleDown
} from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faInstagram } from "@fortawesome/fontawesome-free-brands";
import LoadingSpinner from "./components/LoadingSpinner";
import Context from "./Context";
import HomePage from "./screens/HomePage/HomePage";
import CartPage from "./screens/CartPage/CartPage";
import { getGalleryItems } from "./api/GalleryCalls";
import { getCart } from "./api/CartCalls";
import "./App.scss";
import NavBarContainer from "./containers/NavBarContainer/NavBarContainer";

const GalleryPage = lazy(() => import("./screens/GalleryPage/GalleryPage"));
const GalleryItemContainer = lazy(() =>
  import("./containers/GalleryItemContainer/GalleryItemContainer")
);

library.add(
  faBars,
  faCamera,
  faShoppingCart,
  faInstagram,
  faCircle,
  faUndo,
  faSearch,
  faPlus,
  faMinus,
  faAngleDown
);

class App extends Component {
  constructor() {
    super();
    this.state = {
      galleryItems: [],
      cartItems: null,
      cartTotal: 0,
      currentPage: "Home",
      height: 0,
      width: 0,
      setCurrentPage: this.setCurrentPage
      //currentBackground: "https://images.unsplash.com/photo-1543098052-46a1387df8f3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=169eed0f9b879b7a5b36b69e41e8afcc&auto=format&fit=crop&w=1350&q=80",
    };
  }

  componentDidMount = async () => {
    this.updateWindowSize();
    window.addEventListener("resize", this.updateWindowSize);

    const items = await getGalleryItems();
    //const cart = await getCart();

    this.setState({ galleryItems: items });

    //this.rotateBackground();
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowSize);
    clearInterval(this.interval);
  }

  updateWindowSize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.setState({ width, height });
  };

  setCurrentPage = page => {
    this.setState({ currentPage: page });
  };
  /*  May use this at some point but we're not there yet.
  rotateBackground = () => {
    if (window.innerWidth >= 900) {      
      const backgroundImages = ["https://images.unsplash.com/photo-1543098052-46a1387df8f3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=169eed0f9b879b7a5b36b69e41e8afcc&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1543079342-6509eb35f1ae?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=01eb15c6dbf4e02f2dc92857d448e982&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1543070945-15aab30a3e62?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e69a86814f6664ea2aceb9add0f5120a&auto=format&fit=crop&w=1350&q=80"];
      let index = 1;
  
      this.ImageInterval = setInterval(() => {
        if (index === backgroundImages.length - 1) index = 0;
        this.setState({ currentBackground: backgroundImages[index] });
        index++;
      }, 10000);
    }
  }
*/

  render() {
    return (
      <Context.Provider value={this.state}>
        <div className="app">
          <NavBarContainer />
          <Route exact path="/" component={HomePage} />
          <Suspense fallback={<LoadingSpinner />}>
            <Route
              path="/gallery"
              render={() =>
                window.innerWidth > 900 ? <Redirect to="/" /> : <GalleryPage />
              }
            />
            <Route path="/gallery-item/:id" component={GalleryItemContainer} />
          </Suspense>
          <Route path="/cart" component={CartPage} />
        </div>
      </Context.Provider>
    );
  }
}

export default App;
