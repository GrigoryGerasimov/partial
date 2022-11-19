import React from 'react'
import PropTypes from 'prop-types'

export const SmallerTitle = ({ children }) => {
	return <h5 className='text-sm'>{children}</h5>
}

SmallerTitle.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}
