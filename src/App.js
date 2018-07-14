import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
	faBars,
	faCamera,
	faShoppingCart
} from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faInstagram } from '@fortawesome/fontawesome-free-brands'
import HomePage from './containers/HomePage/HomePage'
import GalleryPage from './containers/GalleryPage/GalleryPage';
import CartPage from './containers/CartPage/CartPage'
import './App.css'

library.add(faBars, faCamera, faShoppingCart, faInstagram, faCircle)

class App extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/Gallery" component={GalleryPage} />
				<Route path="/Cart" component={CartPage} />
			</Switch>
		)
	}
}

export default App
