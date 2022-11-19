import React from 'react'
import { useNavigate } from 'react-router-dom'
import TeammatePic from '../temmateCard/TeammatePic.jsx'
import TeammatePageInfo from './TeammatePageInfo.jsx'
// import TeammatePageContactsList from './TeammatePageContactsList.jsx'
import TeammatePageInterestsBlock from './TeammatePageInterestsBlock.jsx'
import TeammatePageFeedback from './TeammatePageFeedback.jsx'
import Button from '../../common/Button'
import PropTypes from 'prop-types'

const TeammatePageBody = ({ data }) => {
	const navigate = useNavigate()
	console.log(data)
	//    max-w-full leading-10 text-center
	return (
		<div className='flex flex-col mt-5'>
			<div className='flex flex-row gap-5 flex-wrap justify-center '>
				<div className='lg:w-1/2 md:w-1/2 sm:w-full'>
					<div>
						<TeammatePic
							imgClass='block max-w-full mb-11 w-80 rounded-lg'
							imgPath={data.imgPath}
						/>
					</div>
				</div>
				<div className='lg:w-1/3 md:w-1/3 sm:w-full'>
					<div>
						<TeammatePageInfo infoClass='flex flex-col gap-2 mb-11' data={data} />
						<TeammatePageInterestsBlock
							interestsBlockClass='mb-11'
							hobbiesList={data.hobbies}
						/>
						<div className='border border-red-700 border-1'>PROGRESS BAR</div>
					</div>
				</div>
			</div>

			<div>
				3
				<div className='border border-red-700 border-1'>
					<div className='border border-red-700 border-1'>PORTFOLIO: </div>
					<div className='border border-red-700 border-1 flex flex-col '>
						Soc network:
						<div className='flex gap-5'>
							<a href={data.contacts.linkedIn.urlPath}>LinkedIn</a>
							<a href={data.contacts.tme.urlPath}>Telegram</a>
						</div>
					</div>
					{/* <TeammatePageContactsList contactsListClass='mb-11' contacts={data.contacts} /> */}
					<div className='border border-red-700 border-1'>
						<Button onClick={() => navigate(-1)}>К команде разработки</Button>
						<TeammatePageFeedback feedbackClass='mb-11' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default TeammatePageBody

TeammatePageBody.propTypes = {
	data: PropTypes.object,
}
