import React, { Component, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
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
import {Elements, StripeProvider} from 'react-stripe-elements';
import Context from "./Context";
import HomePage from "./screens/HomePage/HomePage";
import NavBarContainer from "./containers/NavBarContainer/NavBarContainer";
import { getGalleryItems, getFeaturedItems } from "./api/GalleryCalls";
import { getCart } from "./api/CartCalls";
import "react-toastify/dist/ReactToastify.min.css";
import "./App.scss";

const GalleryPage = lazy(() => import("./screens/GalleryPage/GalleryPage"));
const GalleryItemContainer = lazy(() =>
    import("./containers/GalleryItemContainer")
);
const PaymentFormContainer = lazy(() =>
    import("./containers/PaymentFormContainer")
);
const CartContainer = lazy(() => import("./containers/CartContainer"));

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
            featuredItems: [],
            cartItems: [],
            userInfo: {},
            cartTotal: 0,
            height: 0,
            width: 0,
            updateCart: this.updateCart,
            updateUserInfo: this.updateUserInfo,
            updateCartTotal: this.updateCartTotal
        };
    }

    componentDidMount = async () => {
        this.updateWindowSize();
        window.addEventListener("resize", this.updateWindowSize);

        // get application data

        let galleryItems = await getGalleryItems();

        if (galleryItems.length > 0) {
            const featuredItems = await getFeaturedItems();

            galleryItems = this.sortAlphabetically(galleryItems);

            this.setState({ galleryItems, featuredItems });
            this.updateCart();
        } else {
            console.log("couldn't get gallery items");
        }
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

    updateCart = async () => {
        let cart = await getCart();
        cart.length > 0
            ? (cart = this.sortAlphabetically(cart))
            : console.log("cart empty");

        this.setState({ cartItems: cart });
    };

    updateUserInfo = userInfo => {
        console.log(userInfo);
        this.setState({ userInfo });
    };

    updateCartTotal = total => {
        this.setState({ cartTotal: total });
    }

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
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Suspense fallback={ <div>loading...</div> }>
                            <Route
                                path="/gallery"
                                render={() =>
                                    window.innerWidth > 900 ? (
                                        <Redirect to="/" />
                                    ) : (
                                        <GalleryPage />
                                    )
                                }
                            />
                            <Route
                                path="/gallery-item/:id"
                                component={GalleryItemContainer}
                            />
                            <StripeProvider apiKey="pk_test_T0QmVwOvjHsnfM3pP4lrjD6J">
                                <Elements>
                                    <Route
                                        path="/checkout"
                                        component={PaymentFormContainer}
                                    />                                    
                                </Elements>
                            </StripeProvider>
                            <Route path="/cart" component={CartContainer} />
                        </Suspense>
                    </Switch>
                </div>
                <ToastContainer />
            </Context.Provider>
        );
    }
}

export default App;
