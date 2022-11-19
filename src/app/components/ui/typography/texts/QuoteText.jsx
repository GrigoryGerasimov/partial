import React from 'react'
import PropTypes from 'prop-types'

export const QuoteText = ({ children }) => {
	return (
		<blockquote className='my-0 py-10 border-l-1 border-r-1 border-dashed border-yellow-900 border-opacity-90'>
			{children}
		</blockquote>
	)
}

QuoteText.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}
