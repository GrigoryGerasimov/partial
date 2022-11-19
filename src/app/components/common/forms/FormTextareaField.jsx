import React from 'react'
import PropTypes from 'prop-types'
import { SmallerTitle, ItalicText } from '../../ui/typography'

export const FormTextareaField = ({
	formEntityClassname,
	id,
	label,
	name,
	value,
	placeholder,
	error,
	onChange,
}) => {
	return (
		<div className={formEntityClassname}>
			<label htmlFor={id}>{label}</label>
			<textarea
				id={id}
				name={name}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
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

FormTextareaField.propTypes = {
	formEntityClassname: PropTypes.string,
	id: PropTypes.string,
	label: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string,
	placeholder: PropTypes.string,
	error: PropTypes.string,
	onChange: PropTypes.func,
}
