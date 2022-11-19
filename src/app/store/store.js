import { configureStore } from '@reduxjs/toolkit'
import { mockApi } from './api.js'
// import { teammatesSlice, hobbiesSlice, socialnetsSlice } from "./reducer.js";

// const rootReducer = combineReducers({
//     teammates: teammatesSlice.reducer,
//     hobbies: hobbiesSlice.reducer,
//     socialnets: socialnetsSlice.reducer
// });

export const store = configureStore({
	reducer: {
		[mockApi.reducerPath]: mockApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mockApi.middleware),
})
