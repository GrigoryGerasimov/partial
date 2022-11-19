import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, ...rest }) => {
	return (
		<button
			className='inline-block w-[100%] p-3 bg-indigo-500 rounded-md text-slate-50 border-2 border-slate-50 transition duration-400 hover:text-indigo-500 hover:bg-slate-50 hover:border-indigo-500'
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
