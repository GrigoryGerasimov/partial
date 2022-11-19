import React from 'react'
import NavBar from '../NavBar'
import NavLogo from '../NavLogo'

const Header = () => {
	return (
		<header className='sm:flex sm:flex-wrap sm:flex-col sm:content-center md:flex md:flex-row md:justify-start md:py-5 md:px-11 md:w-full md:bg-red-100 md:bg-opacity-60 md:text-yellow-900 md:text-opacity-80'>
			<NavLogo label='T.E.A.M' />
			<NavBar />
		</header>
	)
}

export default Header
