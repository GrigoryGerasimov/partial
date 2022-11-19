import React from 'react'
import PropTypes from 'prop-types'

export const SmallTitle = ({ children }) => {
	return <h6>{children}</h6>
}

SmallTitle.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}
