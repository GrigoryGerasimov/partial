const favourite = []
const FAVOURITE_KEY = 'favourite'

const favouriteService = {
	initFavourite: () => {
		if (!localStorage.getItem(FAVOURITE_KEY)) {
			localStorage.setItem(FAVOURITE_KEY, JSON.stringify(favourite))
		}
	},
	getFavourite: () => {
		const data = JSON.parse(localStorage.getItem(FAVOURITE_KEY))
		return data
	},
	addFavourite: (id) => {
		const data = JSON.parse(localStorage.getItem(FAVOURITE_KEY))
		const dataIndex = data.findIndex((f) => f._id === id)

		if (dataIndex === -1) {
			const addData = { _id: id }
			data.push(addData)
			localStorage.setItem(FAVOURITE_KEY, JSON.stringify(data))
		}
		return data
	},
	removeFavourite: (id) => {
		const data = JSON.parse(localStorage.getItem(FAVOURITE_KEY))
		const dataWithRemovedId = data.filter((f) => f._id !== id)
		localStorage.setItem(FAVOURITE_KEY, JSON.stringify(dataWithRemovedId))
		return data
	},
}

export default favouriteService
