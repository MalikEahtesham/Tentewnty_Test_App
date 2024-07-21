// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import GetMoviesList from './actions/GetMoviesList';
import GetMovieDetailByID from './actions/GetMovieDetailByID';
import GetMovieImagesByID from './actions/GetMovieImagesByID';

export const store = configureStore({
  reducer: {
    GetMoviesList,
    GetMovieDetailByID,
    GetMovieImagesByID
  },
});

export default store;
