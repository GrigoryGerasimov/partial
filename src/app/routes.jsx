import React from 'react'
import { Navigate } from 'react-router-dom'
import NotFoundPage from './components/pages/NotFoundPage.jsx'
import MainPage from './components/pages/MainPage'
import TeammatesLayout from './layouts/TeammatesLayout'
import TeammatesListPage from './components/pages/TeammatesListPage'
import TeammatePage from './components/pages/TeammatePage'
import LoginPage from './components/pages/loginPage'
import SingupPage from './components/pages/singupPage'
import AuthLayout from './layouts/authLayout.jsx'
import FavoritePage from './components/pages/favoritePage.jsx'

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
		path: 'favorite',
		element: <FavoritePage />,
	},
	{ path: '*', element: <NotFoundPage /> },
]
