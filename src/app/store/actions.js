import { createAsyncThunk } from '@reduxjs/toolkit'
import { teammatesService } from '../services/teammatesService.js'
import { hobbiesService } from '../services/hobbiesService.js'
import { socialnetsService } from '../services/socialnetsService.js'

export const asyncTeammatesActions = {
	receiveAsyncTeammates: createAsyncThunk(
		'teammates/receiveTeammates',
		async (_, thunkApi) => {
			try {
				return await teammatesService.receiveAll()
			} catch (error) {
				return thunkApi.rejectWithValue(error.message)
			}
		},
	),
	receiveAsyncTeammateById: createAsyncThunk(
		'teammates/receiveTeammateById',
		async ({ id }, thunkApi) => {
			try {
				return await teammatesService.receiveById(id)
			} catch (error) {
				return thunkApi.rejectWithValue(error.message)
			}
		},
	),
	createAsyncTeammates: createAsyncThunk(
		'teammates/createTeammates',
		async ({ data }, thunkApi) => {
			try {
				return await teammatesService.create(data)
			} catch (error) {
				return thunkApi.rejectWithValue(error.message)
			}
		},
	),
	updateAsyncTeammate: createAsyncThunk(
		'teammates/updateTeammate',
		async ({ id, data }, thunkApi) => {
			try {
				return await teammatesService.update(id, data)
			} catch (error) {
				return thunkApi.rejectWithValue(error.message)
			}
		},
	),
	removeAsyncTeammate: createAsyncThunk(
		'teammates/removeTeammate',
		async ({ id }, thunkApi) => {
			try {
				return await teammatesService.remove(id)
			} catch (error) {
				return thunkApi.rejectWithValue(error.message)
			}
		},
	),
}

export const asyncHobbiesActions = {
	receiveAsyncHobbies: createAsyncThunk('hobbies/receiveHobbies', async (_, thunkApi) => {
		try {
			return await hobbiesService.receiveAll()
		} catch (error) {
			return thunkApi.rejectWithValue(error.message)
		}
	}),
	receiveAsyncHobbyById: createAsyncThunk(
		'hobbies/receiveHobby',
		async ({ id }, thunkApi) => {
			try {
				return await hobbiesService.receiveById(id)
			} catch (error) {
				return thunkApi.rejectWithValue(error.message)
			}
		},
	),
	createAsyncHobbies: createAsyncThunk(
		'hobbies/createHobbies',
		async ({ payload }, thunkApi) => {
			try {
				return await hobbiesService.create(payload)
			} catch (error) {
				return thunkApi.rejectWithValue(error.message)
			}
		},
	),
	updateAsyncHobby: createAsyncThunk(
		'hobbies/updateHobby',
		async ({ id, payload }, thunkApi) => {
			try {
				return hobbiesService.update(id, payload)
			} catch (error) {
				return thunkApi.rejectWithValue(error.message)
			}
		},
	),
	removeAsyncHobby: createAsyncThunk('hobbies/removeHobby', async ({ id }, thunkApi) => {
		try {
			return hobbiesService.remove(id)
		} catch (error) {
			return thunkApi.rejectWithValue(error.message)
		}
	}),
}

export const asyncSocialnetsActions = {
	receiveAsyncSocialnets: createAsyncThunk(
		'socialnets/receiveSocialnets',
		async (_, thunkApi) => {
			try {
				return await socialnetsService.receiveAll()
			} catch (error) {
				return thunkApi.rejectWithValue(error.message)
			}
		},
	),
	receiveAsyncSocialnetById: createAsyncThunk(
		'socialnets/receiveSocialnet',
		async ({ id }, thunkApi) => {
			try {
				return await socialnetsService.receiveById(id)
			} catch (error) {
				return thunkApi.rejectWithValue(error.message)
			}
		},
	),
}
