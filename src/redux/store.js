import { configureStore } from "@reduxjs/toolkit";
import jokeReducer from "./features/jokeSlice";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
}

const persisteJokeReducer = persistReducer(persistConfig, jokeReducer)

export const store = configureStore({
  reducer: {joke: persisteJokeReducer},
  devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)