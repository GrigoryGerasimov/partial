import React, { useEffect, useState } from 'react'
import TeammateCard from '../ui/temmateCard'
import { useReceiveTeammatesQuery } from '../../store/api'
import Button from '../common/Button'
import favoriteService from '../../services/favoriteService'
import ComponentTitle from '../common/componentTitle'
import ComponentContainer from '../common/componentContainer'

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
		<ComponentContainer>
			<ComponentTitle title='Favorite Teammates' />
			<div className='flex flex-wrap justify-around'>
				{renderData && renderData.length !== 0 ? (
					renderData.map((t) => (
						<div key={t._id} className='w-1/3 flex flex-col px-2 justify-around'>
							<TeammateCard data={t} />
							<div>
								<Button onClick={() => handleRemoveFavoriteOnPage(t._id)}>
									Remove from favorites
								</Button>
							</div>
						</div>
					))
				) : (
					<div>Now is List Empty</div>
				)}
			</div>
		</ComponentContainer>
	)
}

export default FavoritePage
