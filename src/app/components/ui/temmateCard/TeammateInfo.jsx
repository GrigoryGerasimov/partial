import React from 'react'
import { RegularTitle, AverageTitle } from '../typography'
import PropTypes from 'prop-types'

export const TeammateInfo = ({ infoClass, data }) => {
	return (
		<article className={infoClass}>
			<RegularTitle>{`${data.firstName} ${data.lastName}`}</RegularTitle>
			<AverageTitle>{data.position}</AverageTitle>
		</article>
	)
}

TeammateInfo.propTypes = {
	infoClass: PropTypes.string,
	data: PropTypes.object,
}
