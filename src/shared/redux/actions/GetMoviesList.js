// src/features/someFeature/someFeatureSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Alert } from 'react-native';

// Define an async thunk
export const GetMoviesList = createAsyncThunk('moviesList',   async (payload,{dispatch,getState}) => {
        let headersList = {
            "Accept": "*/*",
            "api_key": "176a14dc8f651e7ed9f7dba074475eed",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzZhMTRkYzhmNjUxZTdlZDlmN2RiYTA3NDQ3NWVlZCIsIm5iZiI6MTcyMTQyMDM2NC4zMDkzNDYsInN1YiI6IjY2OWFjOGFlYjgwOGRkNTliMzA5ODJiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.54tDWP0RT4A9LlZjIQNhxVQ0_qunSx2HzIQJfM5DF9M"
        }
        // Alert.alert("hihihi")
        dispatch(gettingMoviesList())
        fetch("https://api.themoviedb.org/3/movie/upcoming", {
            method: "GET",
            headers: headersList
        }).then((response) => response.json())
            .then((result) => {
                // console.log(result)
                dispatch(gettingMoviesListSuccess(result?.results))})
            .catch((error) => dispatch(gettingMoviesListFailed(error)))
        // const data = await response.json();
        // return data;
    }
);

export const GetMoviesListSlice = createSlice({
    name: 'moviesList',
    initialState: {
        moviesList: [],
        moviesListLoading: false,
        moviesListError: null,
        // status: 'idle', // idle | loading | succeeded | failed
        error: null,
    },
    reducers: {
        gettingMoviesList: (state) => {
            state.moviesListLoading = true
        },
        gettingMoviesListSuccess: (state, action) => {
            state.moviesListLoading = false
            state.moviesList = action.payload
            state.moviesListError = null

        },
        gettingMoviesListFailed: (state, action) => {
            state.moviesListLoading = false
            state.moviesList = []
            state.moviesListError = action.payload

        },
        gettingMoviesListClear: (state, action) => {
            state.moviesListLoading = false
            state.moviesList = []
            state.moviesListError = null

        },
    },
});

export const { gettingMoviesList, gettingMoviesListSuccess, gettingMoviesListFailed, gettingMoviesListClear } = GetMoviesListSlice.actions;

export default GetMoviesListSlice.reducer;
