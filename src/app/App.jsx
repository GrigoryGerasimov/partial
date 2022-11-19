import React from 'react'
import Header from './components/ui/header/Header'
import { useRoutes } from 'react-router-dom'
import { routes } from './routes.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import BreadcrumbsLayout from './components/ui/breadcrumbs/BreadcrumbsLayout'
const App = () => {
	return (
		<>
			<Header />
			<BreadcrumbsLayout>{useRoutes(routes)}</BreadcrumbsLayout>
			<ToastContainer />
		</>
	)
}

export default App
