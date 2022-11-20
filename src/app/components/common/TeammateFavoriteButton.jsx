import React, { useState, useEffect } from 'react'
import Button from './Button'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { add } from '../../store/favouriteSlice'
import favouriteService from '../../services/favouriteService'

const TeammateFavoriteButton = ({ id }) => {
	const [isFavorite, setIsFavorite] = useState(false)
	const dispatch = useDispatch()

	useEffect(() => {
		setIsFavorite(favouriteService.checkFavourite(id))
	}, [id, isFavorite])

	const handleAddFavourite = (id) => {
		dispatch(add(id))
		setIsFavorite(favouriteService.checkFavourite(id))
	}

	const setFavoriteButtonClass = () => {
		const noActive =
			'inline-block w-[100%] p-3 bg-indigo-500 rounded-md text-slate-50 border-2 border-slate-50 transition duration-400 hover:text-indigo-500 hover:bg-slate-50 hover:border-indigo-500'
		const active =
			'inline-block w-[100%] p-3 bg-slate-50 rounded-md text-indigo-500 border-2 border-indigo-500'
		return !isFavorite ? noActive : active
	}

	return (
		<Button className={setFavoriteButtonClass()} onClick={() => handleAddFavourite(id)}>
			{!isFavorite ? 'Добавить' : 'В Избранном'}
		</Button>
	)
}

TeammateFavoriteButton.propTypes = {
	id: PropTypes.string,
}

export default TeammateFavoriteButton
