import React from 'react'
import { UnorderedList, ListElement } from '../typography'
import { useReceiveHobbiesQuery } from '../../../store/api.js'
import Loader from '../../common/Loader.jsx'
import PropTypes from 'prop-types'

const TeammatePageInterestsBlock = ({ interestsBlockClass, hobbiesList }) => {
	const { isLoading, isSuccess, data } = useReceiveHobbiesQuery({
		refetchOnFocus: true,
	})

	return !isLoading && isSuccess ? (
		<article className={interestsBlockClass}>
			<span className='block mb-4 text-3xl font-bold'>Мои увлечения</span>
			<UnorderedList listClass={'text-xl capitalize'}>
				{hobbiesList.map((hobby) => {
					for (const dataItem of data) {
						if (hobby === dataItem._id) {
							return (
								<ListElement key={dataItem._id} classList={'mb-2'}>
									{dataItem.label}
								</ListElement>
							)
						}
					}
					return (
						<ListElement classList={'mb-2'} key={hobby}>
							{hobby}
						</ListElement>
					)
				})}
			</UnorderedList>
		</article>
	) : (
		<Loader />
	)
}

export default TeammatePageInterestsBlock

TeammatePageInterestsBlock.propTypes = {
	interestsBlockClass: PropTypes.string,
	hobbiesList: PropTypes.arrayOf(PropTypes.string),
}
