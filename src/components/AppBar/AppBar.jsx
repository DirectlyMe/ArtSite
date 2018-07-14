import React from 'react'
import { Link } from 'react-router-dom';
import IconButton from '../IconButton/IconButton'
import './styles.css'

const AppBar = ({ cartFunc, menuFunc }) => {
	return (
		<div className="AppBar">
			<Link className="heading" to="/">Kelsey Loves Art</Link>
			<div className="icons">
				<IconButton
					iconName={'shopping-cart'}
					iconClass="cartIcon"
					iconClick={cartFunc}
				/>
				<IconButton
					iconName={'bars'}
					iconClass="menuIcon"
                    iconClick={menuFunc}
				/>
			</div>
		</div>
	)
}

export default AppBar
