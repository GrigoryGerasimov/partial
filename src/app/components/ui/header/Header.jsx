import React from 'react'
import NavBar from './NavBar'
import NavLogo from './NavLogo'
import AuthLinks from './authLinks'

const Header = () => {
	return (
		<header className='text-slate-900 text-xl'>
			<div className='w-4/5 m-auto py-3 flex items-center justify-between border-b border-indigo-200'>
				<NavLogo />
				{/* <div>T.E.A.M</div> */}
				<NavBar />
				<AuthLinks />
			</div>
		</header>
	)
}

// className='sm:flex sm:flex-wrap sm:flex-col sm:content-center md:flex md:flex-row md:justify-between md:py-5 md:px-11 md:w-full md:bg-red-100 md:bg-opacity-60 md:text-yellow-900 md:text-opacity-80'

export default Header
