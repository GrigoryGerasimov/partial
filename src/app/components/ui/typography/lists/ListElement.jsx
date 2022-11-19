import React from 'react'
import PropTypes from 'prop-types'

export const ListElement = ({ children }) => {
	return <li>{children}</li>
}

ListElement.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}
