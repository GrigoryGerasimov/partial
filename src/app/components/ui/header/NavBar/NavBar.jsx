import React from 'react'
import { NavLink } from 'react-router-dom'
import { UnorderedList } from '../../typography'
import { navlinks } from './navlinks.js'

const NavBar = () => {
	return (
		<UnorderedList listClass='sm:flex sm:flex-wrap sm:flex-col sm:content-center md:flex md:flex-row md:justify-center'>
			{navlinks.map(({ id, key, pathTo, label }) => (
				<NavLink
					key={`${id}_${key}`}
					to={pathTo}
					className='inline-block my-2.5 mx-7 no-underline text-yellow-900 text-opacity-80 transition-transform hover:scale-125'
				>
					{label}
				</NavLink>
			))}
		</UnorderedList>
	)
}

export default NavBar
