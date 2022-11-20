import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ color, func, type, isRounded, children, ...rest }) => {
	return (
		<button
			className={`inline-block w-[100%] p-3 bg-${color} ${
				isRounded ? 'rounded-md' : 'rounded-none'
			} text-slate-50 border-2 border-slate-50 transition duration-400 hover:text-indigo-500 hover:bg-slate-50 hover:border-indigo-500`}
			onClick={func}
			type={type}
			{...rest}
		>
			{children}
		</button>
	)
}

export default Button

Button.propTypes = {
	color: PropTypes.string,
	func: PropTypes.func,
	name: PropTypes.string,
	isRounded: PropTypes.bool,
	type: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}
