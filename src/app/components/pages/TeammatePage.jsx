import React from 'react'
import { useParams } from 'react-router-dom'
import { ContainerWrapper } from '../common/ContainerWrapper.jsx'
import TeammatePageBody from '../ui/temmate/TeammatePageBody.jsx'
import { useReceiveTeammatesByIdQuery } from '../../store/api.js'
import Loader from '../common/Loader'

const TeammatePage = () => {
	const { mateId } = useParams()
	const { isLoading, isSuccess, data: teammate } = useReceiveTeammatesByIdQuery(mateId)

	return (
		<ContainerWrapper wrapperClass='max-w-full my-0 mx-auto'>
			{!isLoading && isSuccess ? <TeammatePageBody data={teammate} /> : <Loader />}
		</ContainerWrapper>
	)
}

export default TeammatePage
