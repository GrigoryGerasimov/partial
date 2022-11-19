import React from 'react'
import PropTypes from 'prop-types'

export const BigTitle = ({ children }) => {
	return <h2 className='text-xl'>{children}</h2>
}

BigTitle.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}
