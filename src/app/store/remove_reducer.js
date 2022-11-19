import { createSlice } from '@reduxjs/toolkit'
import {
	asyncTeammatesActions,
	asyncHobbiesActions,
	asyncSocialnetsActions,
} from './remove_actions.js'

const { receiveAsyncTeammates, createAsyncTeammates } = asyncTeammatesActions
const { receiveAsyncHobbies, createAsyncHobbies } = asyncHobbiesActions
const { receiveAsyncSocialnets } = asyncSocialnetsActions

export const teammatesSlice = createSlice({
	name: 'teammates',
	initialState: {
		entities: [],
		isLoading: false,
		error: null,
	},
	extraReducers: {
		[receiveAsyncTeammates.pending.type]: (state) => {
			state.isLoading = true
		},
		[receiveAsyncTeammates.fulfilled.type]: (state, payload) => {
			state.entities = payload
			state.isLoading = false
		},
		[receiveAsyncTeammates.rejected.type]: (state, payload) => {
			state.error = payload
			state.isLoading = false
		},
		[createAsyncTeammates.pending.type]: (state) => {
			state.isLoading = true
		},
		[createAsyncTeammates.fulfilled.type]: (state, payload) => {
			state.entities = payload
			state.isLoading = false
		},
		[createAsyncTeammates.rejected.type]: (state, payload) => {
			state.error = payload
			state.isLoading = false
		},
	},
})

export const hobbiesSlice = createSlice({
	name: 'hobbies',
	initialState: {
		entities: [],
		isLoading: false,
		error: null,
	},
	extraReducers: {
		[receiveAsyncHobbies.pending.type]: (state) => {
			state.isLoading = true
		},
		[receiveAsyncHobbies.fulfilled.type]: (state, payload) => {
			state.entities = payload
			state.isLoading = false
		},
		[receiveAsyncHobbies.rejected.type]: (state, payload) => {
			state.error = payload
			state.isLoading = false
		},
		[createAsyncHobbies.pending.type]: (state) => {
			state.isLoading = true
		},
		[createAsyncHobbies.fulfilled.type]: (state, payload) => {
			state.entities = payload
			state.isLoading = false
		},
		[createAsyncHobbies.rejected.type]: (state, payload) => {
			state.error = payload
			state.isLoading = false
		},
	},
})

export const socialnetsSlice = createSlice({
	name: 'socialnets',
	initialState: {
		entities: [],
		isLoading: false,
		error: null,
	},
	extraReducers: {
		[receiveAsyncSocialnets.pending.type]: (state) => {
			state.isLoading = true
		},
		[receiveAsyncSocialnets.fulfilled.type]: (state, payload) => {
			state.entities = payload
			state.isLoading = false
		},
		[receiveAsyncSocialnets.rejected.type]: (state, payload) => {
			state.error = payload
			state.isLoading = false
		},
	},
})
