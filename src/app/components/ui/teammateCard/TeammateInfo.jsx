import React from 'react'
import { getAgeFormat } from '../../../utils/getAgeFormat.js'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const TeammateInfo = ({ infoClass, data }) => {
	return (
		<article className={infoClass}>
			<Link to={data.id}>
				<div className='text-3xl mb-2 hover:text-violet-800'>
					{`${data.firstName} ${data.lastName}`}
				</div>
			</Link>
			<div className='text-lg'>{`${data.age} ${getAgeFormat(data.age)}`}</div>
			<div className='text-lg'>{data.intro}</div>
		</article>
	)
}

TeammateInfo.propTypes = {
	infoClass: PropTypes.string,
	data: PropTypes.object,
}
