import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'

export default class NavBarContainer extends Component {
	state = {
		isDrawerOpen: false
	}

	toggleDrawer = () => {
        console.log('Menu was clicked')
		this.setState({ isDrawerOpen: !this.state.isDrawerOpen })
	}

	cartPress = () => console.log('God Damnit!!!!!!')

	//TODO: create cart function
	render() {
		return (
			<div>
				<NavBar
					menuFunc={this.toggleDrawer}
					cartFunc={this.cartPress}
					isDrawerOpen={this.state.isDrawerOpen}
				/>
			</div>
		)
	}
}
