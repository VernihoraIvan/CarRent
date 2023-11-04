// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://64aafb9b0c6d844abedf0c7b.mockapi.io';

// export const filterCars = createAsyncThunk(
//   'filterCars/post',
//   async (filterCars, { rejectWithValue }) => {
//     try {
//       const {data} = await axios.post('user/food-intake', filterCars);
//       return data;
//     } catch (error) {
//       return rejectWithValue();
//     }
//   }
// );