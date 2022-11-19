import React from 'react'
import { SmallerTitle, ItalicText } from '../../ui/typography'
import PropTypes from 'prop-types'

export const FormBasicField = ({
	formEntityClassname,
	id,
	label,
	type,
	name,
	value,
	placeholder,
	error,
	onChange,
	...rest
}) => {
	return (
		<div className={formEntityClassname}>
			<label htmlFor={id}>{label}</label>
			<input
				type={type}
				id={id}
				name={name}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				{...rest}
			/>
			<div>
				{error && (
					<SmallerTitle>
						<ItalicText>{error}</ItalicText>
					</SmallerTitle>
				)}
			</div>
		</div>
	)
}

FormBasicField.defaultProps = {
	type: 'text',
}

FormBasicField.propTypes = {
	formEntityClassname: PropTypes.string,
	id: PropTypes.string,
	label: PropTypes.string,
	type: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string,
	placeholder: PropTypes.string,
	error: PropTypes.string,
	onChange: PropTypes.func,
}
