import React from 'react'
import TeammateCard from '../ui/teammateCard'
import { useReceiveTeammatesQuery } from '../../store/api.js'
import ComponentTitle from '../common/Title'
import TeammateCardLoader from '../ui/TeammateCardLoader'
import TeammateFavoriteButton from '../common/TeammateFavoriteButton'

const TeammatesListPage = () => {
	const { isLoading, isSuccess, data } = useReceiveTeammatesQuery({
		refetchOnFocus: true,
	})

	return (
		<>
			<ComponentTitle title='Наша команда' />
			<div className='flex flex-wrap justify-around'>
				{!isLoading && isSuccess ? (
					data.map((d) => (
						<div key={d.id} className='flex px-2 justify-around'>
							<div className='flex flex-col justify-between max-w-[310px] mb-10 bg-slate-50 transition duration-400 hover:shadow-lg hover:shadow-indigo-200 rounded-xl'>
								<TeammateCard data={d} />

								<div className='flex justify-around px-2 mb-5'>
									<div>
										<TeammateFavoriteButton id={d.id} />
									</div>
								</div>
							</div>
						</div>
					))
				) : (
					<>
						{[' ', ' ', ' ', ' '].map((item, i) => (
							<div key={'loaderCard' + i} className='flex px-2 justify-around'>
								<TeammateCardLoader />
							</div>
						))}
					</>
				)}
			</div>
		</>
	)
}

export default TeammatesListPage
