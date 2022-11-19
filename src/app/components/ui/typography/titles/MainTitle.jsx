import React from 'react'
import PropTypes from 'prop-types'

export const MainTitle = ({ children }) => {
	return <h1 className='text-2xl'>{children}</h1>
}

MainTitle.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}
