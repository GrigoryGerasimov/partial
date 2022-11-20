import { createSlice } from '@reduxjs/toolkit'
import favouriteService from '../services/favouriteService.js'

const { initFavourite, getFavourite, addFavourite, removeFavourite } = favouriteService

export const favouriteSlice = createSlice({
    name: 'favourites',
    initialState: {
        entities: getFavourite() || initFavourite(),
        isLoading: true,
    },
    reducers: {
        get: (state) => {
            state.entities = getFavourite()
            state.isLoading = false
        },
        add: (state, { payload }) => {
            state.entities = addFavourite(payload)
            state.isLoading = false
        },
        remove: (state, { payload }) => {
            state.entities = removeFavourite(payload)
            state.isLoading = false
        },
    },
})

export const { actions: { get, add, remove } } = favouriteSlice
