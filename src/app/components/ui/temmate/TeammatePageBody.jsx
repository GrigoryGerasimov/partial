import React from 'react'
import { useNavigate } from 'react-router-dom'
import TeammatePic from '../temmateCard/TeammatePic.jsx'
import TeammatePageInfo from './TeammatePageInfo.jsx'
// import TeammatePageContactsList from "./TeammatePageContactsList.jsx";
import TeammatePageInterestsBlock from './TeammatePageInterestsBlock.jsx'
// import TeammatePageWorkingExperience from "./TeammatePageWorkingExperience.jsx";
import TeammatePageFeedback from './TeammatePageFeedback.jsx'
import Button from '../../common/Button'
import PropTypes from 'prop-types'

const TeammatePageBody = ({ data }) => {
	const navigate = useNavigate()

	return (
		<div className='max-w-full leading-10 text-center'>
			<TeammatePic imgClass='block max-w-full mb-11' imgPath={data.imgPath} />
			<TeammatePageInfo infoClass='mb-11' data={data} />
			{/* <TeammatePageContactsList contactsListClass="mb-11" contacts={data.contacts}/> */}
			<TeammatePageInterestsBlock
				interestsBlockClass='mb-11'
				hobbiesList={data.hobbies}
			/>
			{/* <TeammatePageWorkingExperience workingExperienceClass="mb-11"/> */}
			<Button onClick={() => navigate(-1)}>К команде разработки</Button>
			<TeammatePageFeedback feedbackClass='mb-11' />
		</div>
	)
}

export default TeammatePageBody

TeammatePageBody.propTypes = {
	data: PropTypes.object,
}
