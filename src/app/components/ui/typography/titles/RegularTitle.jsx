import React from 'react'
import PropTypes from 'prop-types'

export const RegularTitle = ({ children }) => {
	return <h3>{children}</h3>
}

RegularTitle.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}
