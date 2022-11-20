import React from 'react'
import NavBar from './NavBar'
import NavLogo from './NavLogo'
import AuthLinks from './AuthLinks'

const Header = () => {
	return (
		<header className='text-slate-900 text-xl'>
			<div className='w-4/5 m-auto py-3 flex items-center justify-between border-b border-indigo-200'>
				<NavLogo />
				<NavBar />
				<AuthLinks />
			</div>
		</header>
	)
}

export default Header
