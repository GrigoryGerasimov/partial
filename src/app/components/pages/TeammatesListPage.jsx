import React from 'react'
import TeammateCard from '../ui/teammateCard'
import Loader from '../common/Loader'
import { useReceiveTeammatesQuery } from '../../store/api.js'
import ComponentTitle from '../common/Title'
import { useNavigate } from 'react-router-dom'
import favoriteService from '../../services/favoriteService'
import Button from '../common/Button.jsx'

const TeammatesListPage = () => {
	const navigate = useNavigate()
	const { isLoading, isSuccess, data } = useReceiveTeammatesQuery({
		refetchOnFocus: true,
	})

	const handleAddFavorite = (id) => {
		favoriteService.addFavorite(id)
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
									<Button onClick={() => navigate(`/teammates/${d.id}`)}>Открыть</Button>
								</div>

								<div className='w-2/5'>
									<Button onClick={() => handleAddFavorite(d.id)}>Избранное</Button>
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
