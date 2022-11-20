import React from 'react'
import { useParams } from 'react-router-dom'
import { ContainerWrapper } from '../common/ContainerWrapper.jsx'
import TeammatePageBody from '../ui/teammate/TeammatePageBody.jsx'
import { useReceiveTeammatesByIdQuery } from '../../store/api.js'
import Loader from '../common/Loader'
import ComponentTitle from '../common/Title.jsx'

const TeammatePage = () => {
	const { mateId } = useParams()
	const { isLoading, isSuccess, data: teammate } = useReceiveTeammatesByIdQuery(mateId, {
		refetchOnFocus: true,
	})

	return (
		<ContainerWrapper wrapperClass='max-w-full my-0 mx-auto'>
			{!isLoading && isSuccess ? (
				<>
					<ComponentTitle title={`${teammate.firstName} ${teammate.lastName}`} />
					<TeammatePageBody data={teammate} />
				</>
			) : (
				<Loader />
			)}
		</ContainerWrapper>
	)
}

export default TeammatePage
