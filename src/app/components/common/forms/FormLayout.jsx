import React from 'react'
import { BigTitle } from '../../ui/typography'
import PropTypes from 'prop-types'

export const FormLayout = ({ formClass, formTitle, onSubmit, children }) => {
	return (
		<fieldset className={formClass}>
			<legend>
				<BigTitle>{formTitle}</BigTitle>
			</legend>
			<form onSubmit={onSubmit}>
				{React.Children.toArray(children).map((child) => {
					return React.cloneElement(child)
				})}
			</form>
		</fieldset>
	)
}

FormLayout.propTypes = {
	formClass: PropTypes.string,
	formTitle: PropTypes.string,
	onSubmit: PropTypes.func,
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}
