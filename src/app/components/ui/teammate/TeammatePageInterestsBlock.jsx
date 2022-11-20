import React from 'react'
import { BigTitle, UnorderedList, ListElement } from '../typography'
import { useReceiveHobbiesQuery } from '../../../store/api.js'
import Loader from '../../common/Loader.jsx'
import PropTypes from 'prop-types'

const TeammatePageInterestsBlock = ({ interestsBlockClass, hobbiesList }) => {
	const { isLoading, isSuccess, data } = useReceiveHobbiesQuery({
		refetchOnFocus: true,
	})

	return !isLoading && isSuccess ? (
		<article className={interestsBlockClass}>
			<BigTitle>Мои увлечения: </BigTitle>
			<UnorderedList>
				{hobbiesList.map((hobby) => {
					for (const dataItem of data) {
						if (hobby === dataItem._id) {
							return <ListElement key={dataItem._id}>{dataItem.label}</ListElement>
						}
					}
					return <ListElement key={hobby}>{hobby}</ListElement>
				})}
			</UnorderedList>
		</article>
	) : <Loader/>
}

export default TeammatePageInterestsBlock

TeammatePageInterestsBlock.propTypes = {
	interestsBlockClass: PropTypes.string,
	hobbiesList: PropTypes.arrayOf(PropTypes.string),
}
