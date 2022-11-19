import React from 'react'
import { Navigate } from 'react-router-dom'
import PageNotFound from './components/pages/PageNotFound.jsx'
import MainPage from './components/pages/MainPage'
import TeammatesLayout from './layouts/TeammatesLayout'
import TeammatesList from './components/pages/TeammatesList'
import TeammatePage from './components/pages/TeammatePage'

export const routes = [
	{ path: '', element: <MainPage /> },
	{
		path: 'teammates',
		element: <TeammatesLayout />,
		children: [
			{ path: '', element: <TeammatesList /> },
			{ path: ':mateId', element: <TeammatePage /> },
			{ path: '*', element: <Navigate to='' /> },
		],
	},
	{ path: 'feedback', element: 'FeedbackPage' },
	{ path: 'contact', element: 'ContactPage' },
	{ path: '*', element: <PageNotFound /> },
]
