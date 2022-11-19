import React from 'react'
import { useNavigate } from 'react-router-dom'
import TeammatePic from './TeammatePic.jsx'
import { TeammateInfo } from './TeammateInfo.jsx'
import Button from '../../common/Button.jsx'
import PropTypes from 'prop-types'
import favoriteService from '../../../services/favoriteService'

const TeammateCard = ({ data }) => {
	const navigate = useNavigate()

	const handleAddFavorite = (id) => {
		favoriteService.addFavorite(id)
	}

	return (
		<section className='flex flex-col justify-between max-w-[310px] mb-10 bg-slate-50 transition duration-400 hover:shadow-lg hover:shadow-indigo-200  rounded-xl relative'>
			<TeammatePic
				imgClass='w-[100%] h-56 rounded-2xl object-fill'
				imgPath={data.imgPath}
			/>
			<TeammateInfo infoClass='my-4 px-3 text-center' data={data} />
			<div className='flex justify-around px-2 mb-5'>
				<div className='w-2/5'>
					<Button onClick={() => navigate(`/teammates/${data.id}`)}>Открыть</Button>
				</div>
				<div className='w-2/5'>
					<Button onClick={() => handleAddFavorite(data._id)}>Избранное</Button>
				</div>
			</div>
		</section>
	)
}

export default TeammateCard

TeammateCard.propTypes = {
	data: PropTypes.object,
}
