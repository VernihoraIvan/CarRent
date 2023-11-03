import { createSlice } from '@reduxjs/toolkit';

import {fetchCars} from "./operations";

const initialState = {
    cars : {
        items: []
    }
}

const carSlice = createSlice({
    name: "cars",
    initialState,
    extraReducers: {
        [fetchCars.fulfilled](state, action) {
            state.cars.items = action.payload;
        }
    }
})

export const carsReducer = carSlice.reducer;