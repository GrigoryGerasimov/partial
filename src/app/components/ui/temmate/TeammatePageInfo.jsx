import React from 'react'
import {
	MainTitle,
	BigTitle,
	RegularTitle,
	AverageTitle,
	BoldText,
	QuoteText,
} from '../typography'
import PropTypes from 'prop-types'

const TeammatePageInfo = ({ infoClass, data }) => {
	return (
		<div className={infoClass}>
			<div>
				Имя: <MainTitle>{`${data.firstName} ${data.lastName}`}</MainTitle>
				<hr />
			</div>
			<div>
				Возраст:
				<BigTitle>{data.age}</BigTitle>
				<hr />
			</div>
			<div className='border border-red-700 border-4'>
				Должность:<BigTitle>{data.position}</BigTitle>BADGE
				<hr />
			</div>
			<div>
				Команда:
				<RegularTitle>
					<BoldText>{data.team}</BoldText>
				</RegularTitle>
				<hr />
			</div>
			<div>
				О себе:
				<AverageTitle>
					<QuoteText>{data.intro}</QuoteText>
				</AverageTitle>
				<hr />
			</div>
		</div>
	)
}

export default TeammatePageInfo

TeammatePageInfo.propTypes = {
	infoClass: PropTypes.string,
	data: PropTypes.object,
}
