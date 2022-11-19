import React from 'react'
import { useParams } from 'react-router-dom'
import { ContainerWrapper } from '../../../components/common/ContainerWrapper.jsx'
import TeammatePageBody from './pageComponents/TeammatePageBody.jsx'
import { useReceiveTeammatesByIdQuery } from '../../../store/api.js'
import Loader from '../../../components/common/Loader'

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
