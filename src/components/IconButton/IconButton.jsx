import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Iconbutton = ({ iconName, iconClass, iconSize, iconClick }) => {
	return (
		<FontAwesomeIcon
			icon={iconName}
			className={iconClass}
			size={iconSize}
			onClick={iconClick}
		/>
	)
}

export default Iconbutton
