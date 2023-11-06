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
      state.id.push(action.payload);
    },
    deleteFavoriteCar: (state, action) => {
      state.id = state.id.filter((car) => car !== action.payload);
    },
  },
});

export const filterReducer = carFilteredSlice.reducer;
export const { filterCars } = carFilteredSlice.actions;

export const choiceReducer = carChoosedSlice.reducer;
export const { choosedCar } = carChoosedSlice.actions;

export const favoriteReducer = carFavoriteSlice.reducer;
export const { favoriteCar } = carFavoriteSlice.actions;

export const { deleteFavoriteCar } = carFavoriteSlice.actions;
