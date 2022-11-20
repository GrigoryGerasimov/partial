import React from 'react'
import { BoldText, RegularText, UnorderedList } from '../typography'
import { useReceiveSocialnetsQuery } from '../../../store/api'
import Loader from '../../common/Loader'
import PropTypes from 'prop-types'

const TeammatePageContactsList = ({ contactsListClass, contacts }) => {
	const { isLoading, isSuccess, data: contactsData } = useReceiveSocialnetsQuery()

	return !isLoading && isSuccess ? (
		<article className={contactsListClass}>
			<div className='flex flex-row'>
				<RegularText>
					Чаще всего меня можно найти здесь <BoldText>здесь:</BoldText>
				</RegularText>
				<UnorderedList listClass='flex justify-center'>
					{Object.keys(contacts).map((contactName) => (
						<a
							key={contacts[contactName]._id}
							href={contacts[contactName].urlPath}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='25'
								height='25'
								fill='currentColor'
								viewBox='0 0 16 16'
								className="ml-5"
							>
								<path d={contactsData.find(contactsItem => contactsItem._id === contacts[contactName]._id).svgPath} />
							</svg>
						</a>
					))}
				</UnorderedList>
			</div>

		</article>
	) : <Loader/>
}

export default TeammatePageContactsList

TeammatePageContactsList.propTypes = {
	contactsListClass: PropTypes.string,
	contacts: PropTypes.object,
}
