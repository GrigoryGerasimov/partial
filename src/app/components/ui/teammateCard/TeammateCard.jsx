import React from 'react'
import TeammatePic from './TeammatePic.jsx'
import { TeammateInfo } from './TeammateInfo.jsx'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const TeammateCard = ({ data }) => {
	return (
		data && (
			<>
				<Link to={data.id}>
					<TeammatePic
						imgClass='w-[100%] h-56 rounded-2xl object-cover transition hover:scale-105'
						imgPath={data.imgPath}
					/>
				</Link>
				<TeammateInfo infoClass='my-4 px-3 text-center' data={data} />
			</>
		)
	)
}

export default TeammateCard

TeammateCard.propTypes = {
	data: PropTypes.object,
}
