import React from 'react'
import TeammatePic from './TeammatePic.jsx'
import { TeammateInfo } from './TeammateInfo.jsx'
import PropTypes from 'prop-types'

const TeammateCard = ({ data }) => {
	return (
		<>
			<TeammatePic
				imgClass='w-[100%] h-56 rounded-2xl object-fill'
				imgPath={data.imgPath}
			/>
			<TeammateInfo infoClass='my-4 px-3 text-center' data={data} />
		</>
	)
}

export default TeammateCard

TeammateCard.propTypes = {
	data: PropTypes.object,
}
