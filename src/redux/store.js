import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { carsReducer } from "./cars/slice";
import { choiceReducer, favoriteReducer, filterReducer } from "./filter/slice";

const favoritePersistConfig = {
  key: "favorite",
  storage,
  whitelist: ["id"],
};

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filter: filterReducer,
    choice: choiceReducer,
    favorite: persistReducer(favoritePersistConfig, favoriteReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
