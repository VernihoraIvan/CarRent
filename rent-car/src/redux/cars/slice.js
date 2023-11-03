import { createSlice } from '@reduxjs/toolkit';

import {fetchBrands, fetchCars} from "./operations";

const initialState = {};

const carSlice = createSlice({
    name: "cars",
    initialState,
    extraReducers: {
        [fetchCars.fulfilled](state, action) {
            state.items = action.payload;            
        },
        [fetchBrands.fulfilled](state, action) {
            state.brands = action.payload;
        }
    }
})

export const carsReducer = carSlice.reducer;