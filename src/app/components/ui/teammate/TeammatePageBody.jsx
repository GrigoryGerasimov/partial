import React from 'react'
import { useNavigate } from 'react-router-dom'
import TeammatePic from '../teammateCard/TeammatePic.jsx'
import TeammatePageInfo from './TeammatePageInfo.jsx'
import TeammatePageContactsList from './TeammatePageContactsList.jsx'
import TeammatePageInterestsBlock from './TeammatePageInterestsBlock.jsx'
import Button from '../../common/Button'
import TeamateProgress from './TeamatePageProgress.jsx'
import { BoldText, ListElement, UnorderedList } from '../typography'

import PropTypes from 'prop-types'
import favouriteService from '../../../services/favouriteService.js'

const TeammatePageBody = ({ data }) => {
	const navigate = useNavigate()

	const handleAddFavourite = (id) => {
		// fix ???
		favouriteService.addFavourite(id)
	}

	return (
		data && (
			<div className='flex flex-col mt-5'>
				<div className='flex flex-row gap-5 flex-wrap justify-center '>
					<div className='lg:w-1/2 md:w-1/2 sm:w-full'>
						<div>
							<TeammatePic
								imgClass='block max-w-full mb-11 w-80 rounded-lg'
								imgPath={data.imgPath}
							/>
							<div className='border border-red-700 border-4'>BOOKMARK</div>
							<BoldText>Задачи на проекте:</BoldText>
							<UnorderedList>
								{data.tasks.map((task) => (
									<ListElement key={task.length}>{task}</ListElement>
								))}
							</UnorderedList>
						</div>
					</div>
					<div className='lg:w-1/3 md:w-1/3 sm:w-full'>
						<div>
							<TeammatePageInfo infoClass='flex flex-col gap-2 mb-11' data={data} />
							<TeammatePageInterestsBlock
								interestsBlockClass='mb-11'
								hobbiesList={data.hobbies}
							/>
							<div>
								<TeamateProgress
									HTML={Number(data.technologies.html)}
									CSS={Number(data.technologies.css)}
									JScript={Number(data.technologies.js)}
									React={Number(data.technologies.react)}
								/>
							</div>
						</div>
					</div>
				</div>

				<div>
					<div className='border border-red-700 border-4'>PORTFOLIO: </div>
					<div className='flex justify-around mt-10 flex-wrap'>
						<TeammatePageContactsList
							contactsListClass='mb-11'
							contacts={data.contacts}
						/>
						<TeammatePageFeedback feedbackClass='mb-11' />
						<div className='self-center'>
							<Button onClick={() => navigate(-1)}>К команде разработки</Button>
						</div>
					</div>
			<div className='flex'>
				<div className='w-[50%] px-4'>
					<span className='block mb-4 text-3xl font-bold'>Задачи на проекте:</span>

					<ul className='text-xl capitalize'>
						{data.tasks.map((task, i) => (
							<li className='mb-2' key={i}>
								{task}
							</li>
						))}
					</ul>
				</div>
				<div className='w-[50%] px-4'>
					<TeammatePageInterestsBlock
						interestsBlockClass='mb-11'
						hobbiesList={data.hobbies}
					/>
				</div>
			</div>
		)
	)
}

export default TeammatePageBody

TeammatePageBody.propTypes = {
	data: PropTypes.object,
}
