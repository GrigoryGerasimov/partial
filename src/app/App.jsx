import React from 'react'
import { useRoutes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/ui/header/Header'
import { routes } from './routes.jsx'



import BreadcrumbsLayout from './components/ui/breadcrumbs/BreadcrumbsLayout'
import favouriteService from './services/favouriteService'
import Background from './components/ui/Background'


// init favourite
favouriteService.initFavourite()

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
