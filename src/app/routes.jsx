import React from 'react'
import { Navigate } from 'react-router-dom'
import NotFoundPage from './components/pages/NotFoundPage.jsx'
import MainPage from './components/pages/MainPage'
import TeammatesLayout from './layouts/TeammatesLayout'
import TeammatesListPage from './components/pages/TeammatesListPage'
import TeammatePage from './components/pages/TeammatePage'

export const routes = [
	{ path: '', element: <MainPage /> },
	{
		path: 'teammates',
		element: <TeammatesLayout />,
		children: [
			{ path: '', element: <TeammatesListPage /> },
			{ path: ':mateId', element: <TeammatePage /> },
			{ path: '*', element: <Navigate to='' /> },
		],
	},
	{ path: 'feedback', element: 'FeedbackPage' },
	{ path: 'contact', element: 'ContactPage' },
	{ path: '*', element: <NotFoundPage /> },
]
