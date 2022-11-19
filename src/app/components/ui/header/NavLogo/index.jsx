import React from 'react'
import { NavLink } from 'react-router-dom'
import { MainTitle } from '../../typography'
import PropTypes from 'prop-types'

const NavLogo = ({ label }) => {
	return (
		<MainTitle>
			<NavLink to='/' className='mr-14 no-underline text-red-400 text-opacity-95'>
				{label}
			</NavLink>
		</MainTitle>
	)
}

export default NavLogo

NavLogo.propTypes = {
	label: PropTypes.string,
}
