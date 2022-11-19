import React from 'react'
import { getAgeFormat } from '../../../utils/getAgeFormat.js'
import PropTypes from 'prop-types'

export const TeammateInfo = ({ infoClass, data }) => {
	return (
		<article className={infoClass}>
			<div className='text-3xl mb-2'>{`${data.firstName} ${data.lastName}`}</div>
			<div className='text-lg'>{`${data.age} ${getAgeFormat(data.age)}`}</div>
			<div className='text-lg'>{data.intro}</div>
		</article>
	)
}

TeammateInfo.propTypes = {
	infoClass: PropTypes.string,
	data: PropTypes.object,
}
