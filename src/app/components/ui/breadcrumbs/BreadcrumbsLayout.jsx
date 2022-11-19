import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

const BreadcrumbsLayout = ({ children }) => {
	const location = useLocation()
	console.log(location)
	return (
		<>
			<h1>{location.pathname}</h1>
			{children}
		</>
	)
}

BreadcrumbsLayout.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

export default BreadcrumbsLayout
