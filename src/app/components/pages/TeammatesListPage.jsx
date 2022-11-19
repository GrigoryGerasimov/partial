import React from 'react'
import TeammateCard from '../ui/temmateCard'
import Loader from '../common/Loader'
import { useReceiveTeammatesQuery } from '../../store/api.js'
import ComponentTitle from '../common/componentTitle'

const TeammatesListPage = () => {
	const { isLoading, isSuccess, data } = useReceiveTeammatesQuery({
		refetchOnFocus: true,
	})

	return !isLoading && isSuccess ? (
		<>
			<ComponentTitle title='Наша команда' />
			<div className='flex flex-wrap justify-around'>
				{data.map((teammate) => (
					<div key={teammate.id} className='w-1/3 flex px-2 justify-around'>
						<TeammateCard data={teammate} />
					</div>
				))}
			</div>
		</>
	) : (
		<Loader />
	)
}

export default TeammatesListPage
