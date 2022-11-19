import React from 'react'
import PropTypes from 'prop-types'

export const RegularTitle = ({ children }) => {
	return <h3 className='text-lg'>{children}</h3>
}

RegularTitle.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}
