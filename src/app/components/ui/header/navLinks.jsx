import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLinks = () => {
	return (
		<div>
			<NavLink
				to='auth/login'
				className='inline-block my-2.5 mx-2 no-underline text-yellow-900 text-opacity-80 transition-transform hover:scale-125'
			>
				Log In
			</NavLink>

			<NavLink
				to='auth/signup'
				className='inline-block my-2.5 mx-2 no-underline text-yellow-900 text-opacity-80 transition-transform hover:scale-125'
			>
				Sing Up
			</NavLink>
		</div>
	)
}

export default NavLinks
