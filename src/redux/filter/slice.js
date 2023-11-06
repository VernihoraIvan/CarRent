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

const carFavoriteSlice = createSlice({
  name: "favorite",
  initialState: { id: [] },
  reducers: {
    favoriteCar: (state, action) => {
      const newData = action.payload;
      if (!state.id.find((item) => item === newData)) {
        state.id.push(newData);
      }
    },
  },
});

export const filterReducer = carFilteredSlice.reducer;
export const { filterCars } = carFilteredSlice.actions;

export const choiceReducer = carChoosedSlice.reducer;
export const { choosedCar } = carChoosedSlice.actions;

export const favoriteReducer = carFavoriteSlice.reducer;
export const { favoriteCar } = carFavoriteSlice.actions;
