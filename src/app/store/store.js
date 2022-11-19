import { configureStore } from '@reduxjs/toolkit'
import { mockApi } from './api.js'
import { setupListeners } from '@reduxjs/toolkit/query'
// import { teammatesSlice, hobbiesSlice, socialnetsSlice } from "./remove_reducer.js";

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

setupListeners(store.dispatch)
