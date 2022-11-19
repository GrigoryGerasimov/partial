import React from 'react'
import PropTypes from 'prop-types'

export const OrderedList = ({ listClass, children }) => {
	return (
		<ol className={listClass}>
			{React.Children.toArray(children).map((child) => {
				return React.cloneElement(child)
			})}
		</ol>
	)
}

OrderedList.propTypes = {
	listClass: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}
