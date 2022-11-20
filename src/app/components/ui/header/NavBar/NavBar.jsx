import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
	return (
		<div className='flex'>
			<NavLink
				to='/teammates'
				className='inline-block my-2.5 mx-7 transition duration-400 hover:text-indigo-500'
			>
				Наша команда
			</NavLink>

			<NavLink
				to='/favorite'
				className='inline-block my-2.5 mx-7 transition duration-400 hover:text-indigo-500'
			>
				Favorite
			</NavLink>
		</div>
	)
}

export default NavBar
