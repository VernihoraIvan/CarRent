import { createSlice } from "@reduxjs/toolkit";

const carFilteredSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    filterCars: (state, action) => action.payload,
  },
});

const carChoosedSlice = createSlice({
  name: "choice",
  initialState: "",
  reducers: {
    choosedCar: (state, action) => action.payload,
  },
});

export const filterReducer = carFilteredSlice.reducer;
export const { filterCars } = carFilteredSlice.actions;

export const choiceReducer = carChoosedSlice.reducer;
export const { choosedCar } = carChoosedSlice.actions;
