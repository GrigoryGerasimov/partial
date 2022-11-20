import React from 'react'
import PropTypes from 'prop-types'

const ComponentContainer = ({ children }) => {
	return <div className='w-4/5 m-auto'>{children}</div>
}

ComponentContainer.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

export default ComponentContainer
