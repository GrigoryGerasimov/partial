import React from 'react'
import Header from './components/ui/header/Header'
import { useRoutes } from 'react-router-dom'
import { routes } from './routes.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import favoriteService from './services/favoriteService'
import Background from './components/ui/background'

// init favorite
favoriteService.initFavorite()

const App = () => {
	return (
		<div className='isolate bg-white '>
			<Background />
			<Header />
			{useRoutes(routes)}
			<ToastContainer />
		</div>
	)
}

export default App
