import React from 'react'
import TeammateCard from '../ui/teammateCard'
import { useReceiveTeammatesQuery } from '../../store/api.js'
import ComponentTitle from '../common/Title'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { add } from '../../store/favouriteSlice.js'
import Button from '../common/Button.jsx'
import TeammateCardLoader from '../ui/TeammateCardLoader'

const TeammatesListPage = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { isLoading, isSuccess, data } = useReceiveTeammatesQuery({
		refetchOnFocus: true,
	})

	const handleAddFavourite = (id) => {
		dispatch(add(id))
	}

	// console.log(!isLoading && isSuccess)

	// const test = 1 - 1

	return (
		<>
			<ComponentTitle title='Наша команда' />
			<div className='flex flex-wrap justify-around'>
				{!isLoading && isSuccess
					? data.map((d) => (
							<div key={d.id} className='w-1/3 flex px-2 justify-around'>
								<div className='flex flex-col justify-between max-w-[310px] mb-10 bg-slate-50 transition duration-400 hover:shadow-lg hover:shadow-indigo-200 rounded-xl'>
									<TeammateCard data={d} />

									<div className='flex justify-around px-2 mb-5'>
										<div className='w-2/5'>
											<Button onClick={() => navigate(`/teammates/${d.id}`)}>
												Открыть
											</Button>
										</div>

										<div className='w-2/5'>
											<Button onClick={() => handleAddFavourite(d.id)}>Избранное</Button>
										</div>
									</div>
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
