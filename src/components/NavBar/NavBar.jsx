import React from 'react'
import AppBar from '../AppBar/AppBar'
import './styles.css'
import Drawer from '../Drawer/Drawer'

const NavBar = ({ cartFunc, toggleDrawer, isDrawerOpen }) => {
	return (
		<div className="NavBar">
			<AppBar toggleDrawer={toggleDrawer} />
			<Drawer isDrawerOpen={isDrawerOpen} />
		</div>
	)
}

export default NavBar
