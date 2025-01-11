// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import candidatsReducer from './slices/candidats';

export const store = configureStore({
  reducer: {
    candidats: candidatsReducer,
  },
});