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
			<section className='grid grid-cols-2 grid-rows-2 gap-y-10 gap-x-16 justify-center items-baseline w-full h-full p-12'>
				{data.map((teammate) => (
					<TeammateCard key={teammate.id} data={teammate} />
				))}
			</section>
		</>
	) : (
		<Loader />
	)
}

export default TeammatesListPage
