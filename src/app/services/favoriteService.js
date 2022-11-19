const favorite = []
const FAVORITE_KEY = 'favorite'

const favoriteService = {
	initFavorite: () => {
		if (!localStorage.getItem(FAVORITE_KEY)) {
			localStorage.setItem(FAVORITE_KEY, JSON.stringify(favorite))
		}
	},
	getFavorite: () => {
		const data = JSON.parse(localStorage.getItem(FAVORITE_KEY))
		return data
	},
	addFavorite: (id) => {
		const data = JSON.parse(localStorage.getItem(FAVORITE_KEY))
		const dataIndex = data.findIndex((f) => f._id === id)

		if (dataIndex === -1) {
			const addData = { _id: id }
			data.push(addData)
			localStorage.setItem(FAVORITE_KEY, JSON.stringify(data))
		}
		return data
	},
	removeFavorite: (id) => {
		const data = JSON.parse(localStorage.getItem(FAVORITE_KEY))
		const dataWithRemovedId = data.filter((f) => f._id !== id)
		localStorage.setItem(FAVORITE_KEY, JSON.stringify(dataWithRemovedId))
		return data
	},
}

export default favoriteService
