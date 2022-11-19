import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLogo = () => {
	return (
		<NavLink to='/'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 24 24'
				fill='currentColor'
				className='w-10 h-10 transition duration-400 hover:text-indigo-500'
			>
				<path
					fillRule='evenodd'
					d='M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z'
					clipRule='evenodd'
				/>
			</svg>
		</NavLink>
	)
}

export default NavLogo
