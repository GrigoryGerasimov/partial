import { configureStore } from '@reduxjs/toolkit'
import { mockApi } from './api.js'
import { setupListeners } from '@reduxjs/toolkit/query'
import { favouriteSlice } from './favouriteSlice'

export const store = configureStore({
	reducer: {
		[mockApi.reducerPath]: mockApi.reducer,
		favourites: favouriteSlice.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mockApi.middleware),
})

setupListeners(store.dispatch)
