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
		<section className='w-max h-max drop-shadow-xl rounded-t-2xl relative cursor-pointer transition-transform hover:scale-110'>
			<TeammatePic
				imgClass='w-96 h-56 rounded-t-2xl object-fill'
				imgPath={data.imgPath}
			/>
			<TeammateInfo
				infoClass='flex flex-col items-center justify-center w-96 h-20 bg-red-400 bg-opacity-70 text-white text-opacity-95 absolute top-36 leading-6 tracking-wider'
				data={data}
			/>
			<section className='flex flex-grow flex-shrink-0'>
				<Button onClick={() => navigate(`/teammates/${data.id}`)}>Открыть</Button>
				<Button onClick={() => handleAddFavorite(data._id)}>В избранное</Button>
			</section>
		</section>
	)
}

export default TeammateCard

TeammateCard.propTypes = {
	data: PropTypes.object,
}
