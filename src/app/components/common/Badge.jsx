import React from 'react'
import PropTypes from 'prop-types'

export const Badge = ({ data }) => {
	const setBadgeColor = () => {
		const red = 'border-red-700'
		const yellow = 'border-yellow-500'
		const indigo = 'border-indigo-500'

		if (data.role === 'teamlead') {
			console.log(data.role)
			return red
		}

		if (data.role === 'techlead') {
			console.log(data.role)
			return yellow
		}

		if (data.role === 'frontendengineer') {
			console.log(data.role)
			return indigo
		}
	}
	return (
		<span
			className={`block w-[30%] mx-auto text-2xl m-2 p-2 border-4 rounded-lg ${setBadgeColor()}`}
		>
			{data.position}
		</span>
	)
}

Badge.propTypes = {
	data: PropTypes.object,
}
