import React from 'react'
import { AverageTitle } from '../../ui/typography'
import PropTypes from 'prop-types'

export const TableBody = ({ children }) => {
	if (!React.Children.count(children)) {
		return <AverageTitle>К сожалению, записи отсутствуют</AverageTitle>
	}

	return <tbody>{children}</tbody>
}

TableBody.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}
