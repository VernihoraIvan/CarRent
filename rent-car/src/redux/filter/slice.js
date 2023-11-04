import { createSlice } from '@reduxjs/toolkit';

const carFilteredSlice = createSlice({
    name: "filter",
    initialState: '',
    reducers: {
        filterCars: (state, action) => action.payload,
      },
})

export const filterReducer = carFilteredSlice.reducer;
export const { filterCars} = carFilteredSlice.actions;