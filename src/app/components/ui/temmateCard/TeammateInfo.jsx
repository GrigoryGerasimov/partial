import React from 'react'
import { RegularTitle, BigTitle, AverageTitle } from '../typography'
import { getAgeFormat } from '../../../utils/getAgeFormat.js'
import PropTypes from 'prop-types'

export const TeammateInfo = ({ infoClass, data }) => {
	return (
		<article className={infoClass}>
			<RegularTitle>{`${data.firstName} ${data.lastName}`}</RegularTitle>
			<BigTitle>{`${data.age} ${getAgeFormat(data.age)}`}</BigTitle>
			<AverageTitle>{data.intro}</AverageTitle>
		</article>
	)
}

TeammateInfo.propTypes = {
	infoClass: PropTypes.string,
	data: PropTypes.object,
}
