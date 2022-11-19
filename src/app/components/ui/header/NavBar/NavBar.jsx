import React from 'react'
import { NavLink } from 'react-router-dom'
import { UnorderedList } from '../../typography'
import AuthLinks from '../authLinks'

const NavBar = () => {
	return (
		<>
			<UnorderedList listClass='sm:flex sm:flex-wrap sm:flex-col sm:content-center md:flex md:flex-row md:justify-center'>
				<NavLink
					to=''
					className='inline-block my-2.5 mx-7 no-underline text-yellow-900 text-opacity-80 transition-transform hover:scale-125'
				>
					Главная
				</NavLink>

				<NavLink
					to='/teammates'
					className='inline-block my-2.5 mx-7 no-underline text-yellow-900 text-opacity-80 transition-transform hover:scale-125'
				>
					Наша команда
				</NavLink>

				<NavLink
					to='/favorite'
					className='inline-block my-2.5 mx-7 no-underline text-yellow-900 text-opacity-80 transition-transform hover:scale-125'
				>
					Favorite
				</NavLink>
			</UnorderedList>
			<AuthLinks />
		</>
	)
}

export default NavBar
