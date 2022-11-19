import React from 'react'
import PropTypes from 'prop-types'

export const ItalicText = ({ children }) => {
	return <em>{children}</em>
}

ItalicText.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}
