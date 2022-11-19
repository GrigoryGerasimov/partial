import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, ...rest }) => {
	return (
		<button
			className='border-none outline-none appearance-none p-4 bg-red-100 bg-opacity-60 text-yellow-900 text-opacity-80 rounded mt-2 mx-2 mb-11 cursor-pointer transition-all hover:bg-red-400 hover:bg-opacity-95 hover:text-white hover:text-opacity-95'
			{...rest}
		>
			{children}
		</button>
	)
}

export default Button

Button.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}
