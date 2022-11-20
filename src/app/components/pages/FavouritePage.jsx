import React, { useEffect, useState } from 'react'
import TeammateCard from '../ui/teammateCard'
import { useReceiveTeammatesQuery } from '../../store/api'
import Button from '../common/Button'
import ComponentTitle from '../common/Title'
import ComponentContainer from '../common/Container'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { get, remove } from '../../store/favouriteSlice.js'
import Loader from '../common/Loader'

const FavouritePage = () => {
	const dispatch = useDispatch()
	const { data } = useReceiveTeammatesQuery({
		refetchOnFocus: true,
	})
	const navigate = useNavigate()
	const [favourite, setFavourite] = useState(
		useSelector((state) => state.favourites.entities),
	)
	const [renderData, setRenderData] = useState()
	const isFavouriteLoading = useSelector((state) => state.favourites.isLoading)

	useEffect(() => {
		dispatch(get())
	}, [data])

	useEffect(() => {
		const favouriteTeammate = filterDataTeam(favourite, data)
		setRenderData(favouriteTeammate)
	}, [data, favourite])

	function filterDataTeam(dataIdsFromLocal, data) {
		const returnData = []
		for (const id in dataIdsFromLocal) {
			for (const d in data) {
				if (dataIdsFromLocal[id]._id === data[d].id) {
					returnData.push(data[d])
				}
			}
		}
		return returnData
	}

	const handleRemoveFavouriteOnPage = (id) => {
		dispatch(remove(id))
		const favouriteWithRemovedId = favourite.filter((f) => f._id !== id)
		setFavourite(favouriteWithRemovedId)
	}

	return (
		<ComponentContainer>
			<ComponentTitle title='Избранные товарищи' />
			<div className='flex flex-wrap justify-around'>
				{!isFavouriteLoading ? (
					renderData && renderData.length !== 0 ? (
						renderData.map((t) => (
							<div key={t._id} className='w-1/3 flex px-2 justify-around'>
								<div className='flex flex-col justify-between max-w-[310px] mb-10 bg-slate-50 transition duration-400 hover:shadow-lg hover:shadow-indigo-200 rounded-xl'>
									<TeammateCard data={t} />

									<div className='flex justify-around px-2 mb-5'>
										<div className='w-2/5'>
											<Button onClick={() => navigate(`/teammates/${t.id}`)}>
												Открыть
											</Button>
										</div>

										<div className='w-2/5'>
											<Button onClick={() => handleRemoveFavouriteOnPage(t.id)}>
												Remove
											</Button>
										</div>
									</div>
								</div>
							</div>
						))
					) : (
						<div>Now is List Empty</div>
					)
				) : (
					<Loader />
				)}
			</div>
		</ComponentContainer>
	)
}

export default FavouritePage
