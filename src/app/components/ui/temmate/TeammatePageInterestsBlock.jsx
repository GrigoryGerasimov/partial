import React from 'react'
import { BigTitle, UnorderedList, ListElement } from '../typography'
import PropTypes from 'prop-types'

const TeammatePageInterestsBlock = ({ interestsBlockClass, hobbiesList }) => {
	return (
		<article className={interestsBlockClass}>
			<BigTitle>Мои увлечения</BigTitle>
			<UnorderedList>
				{hobbiesList.map((hobby) => (
					<ListElement key={hobby}>{hobby}</ListElement>
				))}
			</UnorderedList>
		</article>
	)
}

export default TeammatePageInterestsBlock

TeammatePageInterestsBlock.propTypes = {
	interestsBlockClass: PropTypes.string,
	hobbiesList: PropTypes.arrayOf(PropTypes.string),
}
