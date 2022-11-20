import React from 'react'
import { useNavigate } from 'react-router-dom'
import TeammatePic from '../teammateCard/TeammatePic.jsx'
import TeammatePageInfo from './TeammatePageInfo.jsx'
import TeammatePageContactsList from './TeammatePageContactsList.jsx'
import TeammatePageInterestsBlock from './TeammatePageInterestsBlock.jsx'
import Button from '../../common/Button'
import TeamateProgress from './TeamatePageProgress.jsx'
import PropTypes from 'prop-types'
import TeammateFavoriteButton from '../../common/TeammateFavoriteButton.jsx'

const TeammatePageBody = ({ data }) => {
	const navigate = useNavigate()

	return (
		<div className='pt-20 mb-10 relative'>
			<div className='absolute top-0 left-0'>
				<Button color='indigo-500' isRounded={true} onClick={() => navigate(-1)}>
					К команде разработки
				</Button>
			</div>
			<div className='absolute top-0 right-0'>
				<TeammateFavoriteButton id={data.id} />
			</div>
			<div className='flex mb-10 mx-[-16px] flex-wrap align-center justify-center gap-4'>
				<div className='max-w-xl px-4'>
					<div className='flex flex-col h-[100%] justify-between'>
						<TeammatePic
							imgClass='block rounded-lg object-cover'
							imgPath={data.imgPath}
						/>

						<TeammatePageContactsList contacts={data.contacts} />

						<div className='flex'>
							<TeamateProgress
								HTML={Number(data.technologies.html)}
								CSS={Number(data.technologies.css)}
								JScript={Number(data.technologies.js)}
								React={Number(data.technologies.react)}
							/>
						</div>
					</div>
				</div>
				<div className='flex px-4 justify-around'>
					<div className='w-[90%] '>
						<TeammatePageInfo infoClass='flex flex-col gap-2' data={data} />
					</div>
				</div>
			</div>

			<div className='flex flex-wrap place-content-center gap-4'>
				<div className='px-4 basis-120'>
					<span className='block mb-4 text-3xl font-bold'>Задачи на проекте:</span>

					<ul className='text-xl capitalize'>
						{data.tasks.map((task, i) => (
							<li className='mb-2' key={i}>
								{task}
							</li>
						))}
					</ul>
				</div>
				<div className='px-4 basis-[590px]'>
					<TeammatePageInterestsBlock
						interestsBlockClass='mb-11 mx-[-16px]  p-4'
						hobbiesList={data.hobbies}
					/>
				</div>
			</div>
		</div>
	)
}

export default TeammatePageBody

TeammatePageBody.propTypes = {
	data: PropTypes.object,
}
