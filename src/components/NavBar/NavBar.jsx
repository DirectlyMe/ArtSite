import React from 'react'
import AppBar from '../AppBar/AppBar'
import './styles.css'
import Drawer from '../Drawer/Drawer'

const NavBar = ({ cartFunc, menuFunc, isDrawerOpen }) => {
	return (
		<div>
			<AppBar cartFunc={cartFunc} menuFunc={menuFunc} />
			<Drawer isDrawerOpen={isDrawerOpen} />
		</div>
	)
}

export default NavBar
