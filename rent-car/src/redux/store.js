import { configureStore } from '@reduxjs/toolkit';

import {carsReducer} from "./cars/slice"
import { filterReducer } from './filter/slice';



export const store = configureStore({
    reducer: {
      cars: carsReducer,
      filter: filterReducer,
    }
  });

