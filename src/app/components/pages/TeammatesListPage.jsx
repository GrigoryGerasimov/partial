import React from 'react'
import TeammateCard from '../ui/teammateCard'
import { useReceiveTeammatesQuery } from '../../store/api.js'
import ComponentTitle from '../common/Title'
import { useDispatch } from 'react-redux'
import { add } from '../../store/favouriteSlice.js'
import Button from '../common/Button.jsx'

import { useNavigate } from 'react-router-dom'


const TeammatesListPage = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { isLoading, isSuccess, data } = useReceiveTeammatesQuery({
		refetchOnFocus: true,
	})

	const handleAddFavourite = (id) => {
		dispatch(add(id))
	}

	return (
		<>
			<ComponentTitle title='Наша команда' />
			<div className='flex flex-wrap justify-around'>

				{data.map((d) => (
					<div key={d.id} className='flex px-2 justify-around'>
						<div className='flex flex-col justify-between max-w-[310px] mb-10 bg-slate-50 transition duration-400 hover:shadow-lg hover:shadow-indigo-200 rounded-xl'>
							<TeammateCard data={d} />

							<div className='flex justify-around px-2 mb-5'>
								<div className='w-2/5'>
									<Button
										func={() => navigate(`/teammates/${d.id}`)}
										color='indigo-500'
										isRounded={true}
									>
										Открыть
									</Button>
								</div>

								<div className='w-2/5'>
									<Button
										func={() => handleAddFavourite(d.id)}
										color='indigo-500'
										isRounded={true}
									>
										Избранное
									</Button>

								</div>
							</div>
					  ))
					: [' ', ' ', ' ', ' '].map((item, i) => (
							<div key={'loaderCard' + i} className='flex px-2 justify-around'>
								<TeammateCardLoader />
							</div>
					  ))}
			</div>
		</>
	)
}

export default TeammatesListPage
