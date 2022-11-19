import React from 'react'
import { TableLayout } from '../../../../components/common/tables/TableLayout.jsx'
import { TableBody } from '../../../../components/common/tables/TableBody.jsx'
import { TableRow } from '../../../../components/common/tables/TableRow.jsx'
import PropTypes from 'prop-types'

const TeammatePageWorkingExperience = ({ workingExperienceClass, experience }) => {
	return (
		<article className={workingExperienceClass}>
			<TableLayout captionTitle='Моя карьера во фронтенде'>
				<TableBody>
					{experience.map((expItem) => (
						<TableRow key={expItem._id}>
							<td>{expItem.company}</td>
							<td>{expItem.position}</td>
							<td>{expItem.employmentTimeline}</td>
							<td>{expItem.location}</td>
						</TableRow>
					))}
				</TableBody>
			</TableLayout>
		</article>
	)
}

export default TeammatePageWorkingExperience

TeammatePageWorkingExperience.propTypes = {
	workingExperienceClass: PropTypes.string,
	experience: PropTypes.object,
}
