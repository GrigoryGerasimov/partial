import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, ...rest }) => {
	return (
		<button
			className='inline-block border-none outline-none appearance-none w-full p-4 px-10 bg-red-100 bg-opacity-60 text-yellow-900 text-opacity-80 rounded mb-4 m-auto cursor-pointer transition-all hover:bg-red-400 hover:bg-opacity-95 hover:text-white hover:text-opacity-95'
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
