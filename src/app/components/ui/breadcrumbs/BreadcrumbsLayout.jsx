import React from 'react'
import { useLocation } from 'react-router-dom'
import { useReceiveTeammatesQuery } from '../../../store/api'

const BreadcrumbsLayout = () => {
	const { data } = useReceiveTeammatesQuery({
		refetchOnFocus: true,
	})
	const location = useLocation()

	const getNameById = (id) => {
		return `${data.find((u) => u.id === id).firstName} ${
			data.find((u) => u.id === id).lastName
		}`
	}
	const routeNames = {
		'/': '/Наша команда',
		'/teammates': '/Наша команда',
		'/favourite': '/Избранное',
	}


	return (
		<>
			<h1>
				{location.pathname.split('/').length > 2
					? `/Наша команда/${getNameById(location.pathname.split('/')[2])}`
					: routeNames[location.pathname]}
			</h1>
		</>
	)
}

export default BreadcrumbsLayout
