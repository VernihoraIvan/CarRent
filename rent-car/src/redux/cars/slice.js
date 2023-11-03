import { createSlice } from '@reduxjs/toolkit';

import {fetchCars} from "./operations";

const initialState = {};

const carSlice = createSlice({
    name: "cars",
    initialState,
    extraReducers: {
        [fetchCars.fulfilled](state, action) {
            state.items = action.payload;
        }
    }
})

export const carsReducer = carSlice.reducer;