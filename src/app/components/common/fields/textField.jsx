import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline'

const TextField = ({ name, label, type, value, onChange, error }) => {
	const [showPassword, setShowPassword] = useState(false)

	const toggleShowPassword = () => {
		setShowPassword((prevState) => !prevState)
	}

	const handleChange = ({ target }) => {
		onChange({ name: target.name, value: target.value })
	}

	const getInputClasses = () => {
		return error
			? ' ring-red-500 hover:ring-red-500'
			: ' ring-slate-900/10 hover:ring-slate-300'
	}

	return (
		<div className='pt-2 pb-2 '>
			<div className='relative'>
				<label className='text-slate-800 uppercase' htmlFor={name}>
					{label}
				</label>
				<input
					className={`mt-2 w-full py-2 rounded text-sm  h-12 focus:outline-none bg-white ring-1 ${getInputClasses()} focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-800 p-2`}
					type={showPassword ? 'text' : type}
					id={name}
					name={name}
					value={value}
					onChange={handleChange}
				/>
				{type === 'password' && (
					<span
						onClick={toggleShowPassword}
						className='cursor-pointer absolute left-[90%] top-[54%]'
					>
						{showPassword ? (
							<EyeIcon className='h-6 w-6' />
						) : (
							<EyeOffIcon className='h-6 w-6' />
						)}
					</span>
				)}
			</div>

			{error && <span className='block mt-2 text-red-500'>{error}</span>}
		</div>
	)
}
TextField.defaultProps = {
	type: 'text',
}
TextField.propTypes = {
	name: PropTypes.string,
	label: PropTypes.string,
	value: PropTypes.string,
	type: PropTypes.string,
	onChange: PropTypes.func,
	error: PropTypes.string,
}

export default TextField
