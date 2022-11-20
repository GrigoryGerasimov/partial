import React from 'react'
import {
	MainTitle,
	BigTitle,
	RegularTitle,
	AverageTitle,
	BoldText,
	QuoteText,
} from '../typography'
import { Badge } from '../../common/Badge.jsx'
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
			<div>
				Должность:<BigTitle>{data.position}</BigTitle>
				{data.role === 'teamlead' && <Badge color='red' label='TL'/>}
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
