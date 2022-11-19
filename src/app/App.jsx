import React from 'react'
import Header from './components/ui/header/Header'
import { useRoutes } from 'react-router-dom'
import { routes } from './routes.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import BreadcrumbsLayout from './components/ui/breadcrumbs/BreadcrumbsLayout'
import favoriteService from './services/favoriteService'
import Background from './components/ui/background'

// init favorite
favoriteService.initFavorite()

const App = () => {
	return (
		<div className='isolate bg-white '>
			<Background />
			<Header />
			<BreadcrumbsLayout>{useRoutes(routes)}</BreadcrumbsLayout>
			<ToastContainer />
		</div>
	)
}

export default App
