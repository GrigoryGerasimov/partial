import React from 'react'
import { Navigate } from 'react-router-dom'
import NotFoundPage from './components/pages/NotFoundPage.jsx'
import MainPage from './components/pages/MainPage'
import TeammatesLayout from './layouts/TeammatesLayout'
import TeammatesListPage from './components/pages/TeammatesListPage'
import TeammatePage from './components/pages/TeammatePage'
import LoginPage from './components/pages/LoginPage'
import SingupPage from './components/pages/SingupPage'
import AuthLayout from './layouts/AuthLayout.jsx'
import FavouritePage from './components/pages/FavouritePage.jsx'

export const routes = [
	{ path: '', element: <MainPage /> },
	{
		path: 'auth',
		element: <AuthLayout />,
		children: [
			{
				path: '',
				element: <Navigate to='/auth/signUp' />,
			},
			{
				path: 'login',
				element: <LoginPage />,
			},
			{
				path: 'signup',
				element: <SingupPage />,
			},
			{
				path: '*',
				element: <Navigate to='/auth/signUp' />,
			},
		],
	},
	{
		path: 'teammates',
		element: <TeammatesLayout />,
		children: [
			{ path: '', element: <TeammatesListPage /> },
			{ path: ':mateId', element: <TeammatePage /> },
			{ path: '*', element: <Navigate to='' /> },
		],
	},
	{
		path: 'favourite',
		element: <FavouritePage />,
	},
	{ path: '*', element: <NotFoundPage /> },
]
