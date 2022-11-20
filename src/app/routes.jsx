import React from 'react'
import { Navigate } from 'react-router-dom'
import NotFoundPage from './components/pages/NotFoundPage.jsx'
import TeammatesLayout from './layouts/TeammatesLayout'
import TeammatesListPage from './components/pages/TeammatesListPage'
import TeammatePage from './components/pages/TeammatePage'
import FavouritePage from './components/pages/FavouritePage.jsx'

export const routes = [
	{ path: '/partial', element: <Navigate to='/teammates' /> },

	{
		path: 'teammates',
		element: <TeammatesLayout />,
		children: [
			{ path: '', element: <TeammatesListPage /> },
			{ path: ':mateId', element: <TeammatePage /> },
			{ path: '*', element: <Navigate to='/partial' /> },
		],
	},
	{
		path: 'favourite',
		element: <FavouritePage />,
	},
	{ path: '*', element: <NotFoundPage /> },
]
