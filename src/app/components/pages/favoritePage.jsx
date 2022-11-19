import React, { useEffect, useState } from 'react'
import TeammateCard from '../ui/temmateCard'
import { useReceiveTeammatesQuery } from '../../store/api'
import Button from '../common/Button'
import favoriteService from '../../services/favoriteService'
import ComponentTitle from '../common/componentTitle'

const FavoritePage = () => {
	const { data } = useReceiveTeammatesQuery()
	const [favorite, setFavorite] = useState(favoriteService.getFavorite)
	const [renderData, setRenderData] = useState()

	useEffect(() => {
		const favoriteTeameate = filterDataTeam(favorite, data)
		setRenderData(favoriteTeameate)
	}, [data, favorite])

	function filterDataTeam(dataIdsFromLocal, data) {
		const returnData = []
		for (const id in dataIdsFromLocal) {
			for (const d in data) {
				if (dataIdsFromLocal[id]._id === data[d]._id) {
					returnData.push(data[d])
				}
			}
		}
		return returnData
	}

	const handleRemoveFavoriteOnPage = (id) => {
		favoriteService.removeFavorite(id)
		const favoriteWithRemovedId = favorite.filter((f) => f._id !== id)
		setFavorite(favoriteWithRemovedId)
	}

	return (
		<>
			<ComponentTitle title='Favorite Teammates' />
			<section className='grid grid-cols-3 grid-rows-2 gap-y-10 gap-x-16 justify-center items-baseline w-full h-full p-12'>
				{renderData && renderData.length !== 0 ? (
					renderData.map((t) => (
						<div key={t._id} className='flex flex-col'>
							<TeammateCard data={t} />
							<Button onClick={() => handleRemoveFavoriteOnPage(t._id)}>
								Remove from favorites
							</Button>
						</div>
					))
				) : (
					<div>Now is List Empty</div>
				)}
			</section>
		</>
	)
}

export default FavoritePage
