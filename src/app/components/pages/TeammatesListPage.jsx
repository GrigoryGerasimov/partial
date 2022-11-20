import React from 'react'
import TeammateCard from '../ui/teammateCard'
import Loader from '../common/Loader'
import { useReceiveTeammatesQuery } from '../../store/api.js'
import ComponentTitle from '../common/Title'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { add } from '../../store/favouriteSlice.js'
import Button from '../common/Button.jsx'

const TeammatesListPage = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { isLoading, isSuccess, data } = useReceiveTeammatesQuery({
		refetchOnFocus: true,
	})

	const handleAddFavourite = (id) => {
		dispatch(add(id))
	}

	return !isLoading && isSuccess ? (
		<>
			<ComponentTitle title='Наша команда' />
			<div className='flex flex-wrap justify-around'>
				{data.map((d) => (
					<div key={d.id} className='w-1/3 flex px-2 justify-around'>
						<div className='flex flex-col justify-between max-w-[310px] mb-10 bg-slate-50 transition duration-400 hover:shadow-lg hover:shadow-indigo-200 rounded-xl'>
							<TeammateCard data={d} />

							<div className='flex justify-around px-2 mb-5'>
								<div className='w-2/5'>
									<Button
										func={() => navigate(`/teammates/${d.id}`)}
										name='Открыть'
										color='indigo-500'
										isRounded={true}
									/>
								</div>

								<div className='w-2/5'>
									<Button
										func={() => handleAddFavourite(d.id)}
										name='Избранное'
										color='indigo-500'
										isRounded={true}
									/>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	) : (
		<Loader />
	)
}

export default TeammatesListPage
