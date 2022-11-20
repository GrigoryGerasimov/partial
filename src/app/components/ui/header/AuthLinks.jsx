import React from 'react'
import { NavLink } from 'react-router-dom'

const AuthLinks = () => {
	return (
		<div>
			<NavLink
				to='auth/login'
				className='inline-block my-2.5 mr-6 transition duration-400 hover:text-indigo-500'
			>
				Войти
			</NavLink>

			<NavLink
				to='auth/signup'
				className='inline-block p-3 bg-indigo-500 rounded-md text-slate-50 border-2 border-slate-50 transition duration-400 hover:text-indigo-500 hover:bg-slate-50 hover:border-indigo-500'
			>
				Регистрация
			</NavLink>
		</div>
	)
}

export default AuthLinks
