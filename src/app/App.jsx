import React from 'react'
import Header from './components/ui/header/Header'
import { useRoutes } from 'react-router-dom'
import { routes } from './routes.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import favoriteService from './services/favoriteService'

// init favorite
favoriteService.initFavorite()

const App = () => {
	return (
		<>
			<Header />
			{useRoutes(routes)}
			<ToastContainer />
		</>
	)
}

export default App
