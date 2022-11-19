import React from 'react'
import { useNavigate } from 'react-router-dom'
import TeammatePic from './TeammatePic.jsx'
import { TeammateInfo } from './TeammateInfo.jsx'
import PropTypes from 'prop-types'

const TeammateCard = ({ data }) => {
	const navigate = useNavigate()

	return (
		<section
			className='w-80 h-48 rounded-t-2xl relative cursor-pointer transition-transform hover:scale-110'
			onClick={() => navigate(`/teammates/${data.id}`)}
		>
			<TeammatePic
				imgClass='w-80 h-48 rounded-t-2xl'
				imgPath={data.imgPath}
				imgParams='?fit=crop&w=350&q=200'
			/>
			<TeammateInfo
				infoClass='flex flex-col items-center justify-center w-80 h-16 bg-red-400 bg-opacity-50 text-white text-opacity-95 absolute top-32 leading-6 tracking-wider'
				data={data}
			/>
		</section>
	)
}

export default TeammateCard

TeammateCard.propTypes = {
	data: PropTypes.object,
}
