import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { teammatesSlice, hobbiesSlice } from "./reducer.js";

const rootReducer = combineReducers({
    teammates: teammatesSlice.reducer,
    hobbies: hobbiesSlice.reducer
});

export const store = configureStore({
    reducer: rootReducer
});
