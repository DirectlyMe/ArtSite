import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
	faBars,
	faCamera,
	faShoppingCart
} from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faUndo } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/fontawesome-free-brands'
import { CartContext } from './cart'
import HomePage from './containers/HomePage/HomePage'
import GalleryPage from './containers/GalleryPage/GalleryPage'
import GalleryItemPage from './containers/GalleryItemPage/GalleryItemPage';
import CartPage from './containers/CartPage/CartPage'
import './App.css'

library.add(faBars, faCamera, faShoppingCart, faInstagram, faCircle, faUndo)

const { Provider, Consumer } = CartContext

class App extends Component {
	render() {
		return (
			<Provider value={CartContext}>
					<Route exact path="/" component={HomePage} />
					<Route path="/gallery" component={GalleryPage} />
					<Route path="/galleryitem/:id" component={GalleryItemPage} />
					<Route path="/cart" component={CartPage} />
			</Provider>
		)
	}
}

export default App
