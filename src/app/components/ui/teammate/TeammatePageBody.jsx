import React from 'react'
import { useNavigate } from 'react-router-dom'
import TeammatePic from '../teammateCard/TeammatePic.jsx'
import TeammatePageInfo from './TeammatePageInfo.jsx'
import TeammatePageContactsList from './TeammatePageContactsList.jsx'
import TeammatePageInterestsBlock from './TeammatePageInterestsBlock.jsx'
import Button from '../../common/Button'
import TeamateProgress from './TeamatePageProgress.jsx'
import PropTypes from 'prop-types'
import favouriteService from '../../../services/favouriteService.js'

const TeammatePageBody = ({ data }) => {
	const navigate = useNavigate()

	const handleAddFavourite = (id) => {
		// fix ???
		favouriteService.addFavourite(id)
	}

	return (
		<div className='pt-20 mb-10 relative'>
			<div className='w-1/5 absolute top-0 left-0'>
				<Button
					func={() => navigate(-1)}
					name='К команде разработки'
					isRounded={true}
					color='indigo-500'
				/>
			</div>
			<div className='w-1/5 absolute top-0 right-0'>
				<Button
					func={() => handleAddFavourite(data.id)}
					name='Избранное'
					isRounded={true}
					color='indigo-500'
				/>
			</div>
			<div className='flex mb-10 mx-[-16px]'>
				<div className='w-[50%] px-4'>
					<div className='flex flex-col h-[100%] justify-between'>
						<TeammatePic
							imgClass='block rounded-lg object-cover'
							imgPath={data.imgPath}
						/>

						<TeammatePageContactsList contacts={data.contacts} />

						<div className='flex justify-around'>
							<div className='w-[385px]'>
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
				<div className='flex w-[50%] px-4 justify-around'>
					<div className='w-[90%] '>
						<TeammatePageInfo infoClass='flex flex-col gap-2' data={data} />
					</div>
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
		</div>
	)
}

export default TeammatePageBody

TeammatePageBody.propTypes = {
	data: PropTypes.object,
}
