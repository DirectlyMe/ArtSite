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
import { ToastContainer } from "react-toastify";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faInstagram } from "@fortawesome/fontawesome-free-brands";
import LoadingSpinner from "./components/LoadingSpinner";
import Context from "./Context";
import HomePage from "./screens/HomePage/HomePage";
import CartContainer from "./containers/CartContainer";
import { getGalleryItems } from "./api/GalleryCalls";
import { getCart } from "./api/CartCalls";
import "./App.scss";
import NavBarContainer from "./containers/NavBarContainer/NavBarContainer";
import "react-toastify/dist/ReactToastify.min.css";

const GalleryPage = lazy(() => import("./screens/GalleryPage/GalleryPage"));
const GalleryItemContainer = lazy(() =>
  import("./containers/GalleryItemContainer")
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
      updateCart: this.updateCart
    };
  }

  componentDidMount = async () => {
    this.updateWindowSize();
    window.addEventListener("resize", this.updateWindowSize);

    let items = await getGalleryItems();
    let cart = await getCart();

    items = this.sortAlphabetically(items);
    cart = this.sortAlphabetically(cart);

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
    let cart = await getCart();
    cart = this.sortAlphabetically(cart);

    this.setState({ cartItems: cart });
  };

  sortAlphabetically = arr => {
    arr = arr.sort((a, b) => {
      const aName = a.title.toUpperCase();
      const bName = b.title.toUpperCase();
      if (aName < bName) {
        return -1;
      } else if (aName > bName) {
        return 1;
      } else {
        return 0;
      }
    });

    return arr;
  };

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
