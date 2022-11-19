import React from 'react'
import { Outlet } from 'react-router-dom'
import Card from '../components/common/card'

const AuthLayout = () => {
	return (
		<div className='max-w-md m-auto mt-20'>
			<Card>
				<Outlet />
			</Card>
		</div>
	)
}

export default AuthLayout
