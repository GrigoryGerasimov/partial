const favourite = []
const FAVOURITE_KEY = 'favourite'

const favouriteService = {
	initFavourite: () => {
		if (!localStorage.getItem(FAVOURITE_KEY)) {
			localStorage.setItem(FAVOURITE_KEY, JSON.stringify(favourite))
			return favourite
		} else return JSON.parse(localStorage.getItem(FAVOURITE_KEY))
	},
	getFavourite: () => {
		const data = JSON.parse(localStorage.getItem(FAVOURITE_KEY))
		return data
	},
	checkFavourite: (id) => {
		let flag = true
		const data = JSON.parse(localStorage.getItem(FAVOURITE_KEY))
		if (data) {
			const dataIndex = data.findIndex((f) => f._id === id)
			if (dataIndex === -1) {
				flag = false
			}
		} else {
			flag = false
		}

		return flag
	},
	addFavourite: (id) => {
		const isFavoriteId = favouriteService.checkFavourite(id)
		const data = JSON.parse(localStorage.getItem(FAVOURITE_KEY))

		if (!isFavoriteId) {
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
