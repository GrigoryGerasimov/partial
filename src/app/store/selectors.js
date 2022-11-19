export const receiveAllTeammates = () => (state) =>
	state.teammates.entities ? state.teammates.entities.payload : null
export const receiveTeammateById = (id) => (state) =>
	state.teammates.entities.payload
		? state.teammates.entities.payload.find((entity) => entity.id === id)
		: null
export const teammatesLoadingStatus = () => (state) => state.teammates.isLoading

export const receiveAllHobbies = () => (state) =>
	state.hobbies.entities ? state.hobbies.entities.payload : null
export const receiveHobbyById = (id) => (state) =>
	state.hobbies.entities.payload
		? state.hobbies.entities.payload.find((entity) => entity._id === id)
		: null
export const hobbiesLoadingStatus = () => (state) => state.hobbies.isLoading

export const receiveAllSocialnets = () => (state) =>
	state.socialnets.entities ? state.socialnets.entities.payload : null
export const receiveSocialnetById = (id) => (state) =>
	state.socialnets.entities.payload
		? state.socialnets.entities.payload.find((entity) => entity._id === id)
		: null
export const hobbiesSocialnetsStatus = () => (state) => state.socialnets.isLoading
