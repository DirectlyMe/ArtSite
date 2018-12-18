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
import CartContainer from "./containers/CartItemsContainer/CartItemsContainer";
import { getGalleryItems } from "./api/GalleryCalls";
import { getCart } from "./api/CartCalls";
import "./App.scss";
import NavBarContainer from "./containers/NavBarContainer/NavBarContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

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
      cartItems: [],
      cartTotal: 0,
      currentPage: "Home",
      height: 0,
      width: 0,
      setCurrentPage: this.setCurrentPage,
      updateCart: this.updateCart,
    };
  }

  componentDidMount = async () => {
    this.updateWindowSize();
    window.addEventListener("resize", this.updateWindowSize);

    const items = await getGalleryItems();
    const cart = await getCart();

    this.setState({ galleryItems: items, cartItems: cart });
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

  updateCart = async () => {
    const cart = await getCart();
    this.setState({ cartItems: cart });
  }

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
          <Route path="/cart" component={CartContainer} />
        </div>
        <ToastContainer />
      </Context.Provider>
    );
  }
}

export default App;
