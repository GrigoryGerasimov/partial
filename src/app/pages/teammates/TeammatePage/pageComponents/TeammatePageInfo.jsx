import React from 'react'
import {
	MainTitle,
	BigTitle,
	RegularTitle,
	AverageTitle,
	BoldText,
	QuoteText,
} from '../../../../components/ui/typography'
import PropTypes from 'prop-types'

const TeammatePageInfo = ({ infoClass, data }) => {
	return (
		<div className={infoClass}>
			<MainTitle>{`${data.firstName} ${data.lastName}`}</MainTitle>
			<BigTitle>{data.position}</BigTitle>
			<RegularTitle>
				<BoldText>{data.team}</BoldText>
			</RegularTitle>
			<AverageTitle>
				<QuoteText>{data.intro}</QuoteText>
			</AverageTitle>
		</div>
	)
}

export default TeammatePageInfo

TeammatePageInfo.propTypes = {
	infoClass: PropTypes.string,
	data: PropTypes.object,
}
