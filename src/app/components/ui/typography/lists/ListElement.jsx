import React from 'react'
import PropTypes from 'prop-types'

export const ListElement = ({ classList, children }) => {
	return <li className={classList}>{children}</li>
}

ListElement.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
	classList: PropTypes.string,
}
