import React from 'react'
import { useNavigate } from 'react-router-dom'
import TeammatePic from '../temmateCard/TeammatePic.jsx'
import TeammatePageInfo from './TeammatePageInfo.jsx'
// import TeammatePageContactsList from './TeammatePageContactsList.jsx'
import TeammatePageInterestsBlock from './TeammatePageInterestsBlock.jsx'
import TeammatePageFeedback from './TeammatePageFeedback.jsx'
import Button from '../../common/Button'
import PropTypes from 'prop-types'
import TeamateProgress from '../temmateCard/TeamateProgress.jsx'

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
						<div className='border border-red-700 border-4'>BOOKMARK</div>
						<div className='border border-red-700 border-4'>
							Тут должны данные грузиться с базы?
							<p>
								Чем занимался на проекте <br />
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nisi
								culpa unde corrupti veniam quasi. Ullam inventore, magni assumenda, odit,
								possimus accusantium veniam corporis excepturi eum molestias facere
								perspiciatis soluta.lorem Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Molestiae recusandae corporis ab eligendi maiores
								doloribus, repudiandae quod ex velit quis! Veniam, nemo. Quod sint aut
								odit neque! Eaque, quas. Voluptatibus?
							</p>
						</div>
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
				<div className='border border-red-700 border-4'>SOCIAL NETWORK</div>
				{/* <TeammatePageContactsList contactsListClass='mb-11' contacts={data.contacts} /> */}
				<div className='flex justify-around mt-10 flex-wrap'>
					<TeammatePageFeedback feedbackClass='mb-11' />
					<div className='self-center'>
						<Button onClick={() => navigate(-1)}>К команде разработки</Button>
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
