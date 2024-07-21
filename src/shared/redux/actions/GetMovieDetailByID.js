// src/features/someFeature/someFeatureSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


// Define an async thunk
export const GetMovieDetailByID = createAsyncThunk('moviesDetailByID', async (payload, { dispatch, getState }) => {
    let headersList = {
        "Accept": "*/*",
        "api_key": "176a14dc8f651e7ed9f7dba074475eed",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzZhMTRkYzhmNjUxZTdlZDlmN2RiYTA3NDQ3NWVlZCIsIm5iZiI6MTcyMTQyMDM2NC4zMDkzNDYsInN1YiI6IjY2OWFjOGFlYjgwOGRkNTliMzA5ODJiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.54tDWP0RT4A9LlZjIQNhxVQ0_qunSx2HzIQJfM5DF9M"
    }
    // Alert.alert("hihihi")
    console.log(payload)
    dispatch(gettingMovieDetailByID())
    fetch(`https://api.themoviedb.org/3/movie/${payload}`, {
        method: "GET",
        headers: headersList
    }).then((response) => response.json())
        .then((result) => {
            // console.log(result)
            dispatch(gettingMovieDetailByIDSuccess(result))
        })
        .catch((error) => {
            console.log(error)
            dispatch(gettingMovieDetailByIDFailed(error))
        })
    // const data = await response.json();
    // return data;
}
);

export const GetMovieDetailByIDSlice = createSlice({
    name: 'moviesDetailByID',
    initialState: {
        moviesDetailByID: null,
        moviesDetailByIDLoading: false,
        moviesDetailByIDError: null,
        // status: 'idle', // idle | loading | succeeded | failed
        error: null,
    },
    reducers: {
        gettingMovieDetailByID: (state) => {
            state.moviesDetailByIDLoading = true
        },
        gettingMovieDetailByIDSuccess: (state, action) => {
            state.moviesDetailByIDLoading = false
            state.moviesDetailByID = action.payload
            state.moviesDetailByIDError = null

        },
        gettingMovieDetailByIDFailed: (state, action) => {
            state.moviesDetailByIDLoading = false
            state.moviesDetailByID = null
            state.moviesDetailByIDError = action.payload

        },
        gettingMovieDetailByIDClear: (state, action) => {
            state.moviesDetailByIDLoading = false
            state.moviesDetailByID = null
            state.moviesDetailByIDError = null

        },
    },
});

export const { gettingMovieDetailByID, gettingMovieDetailByIDSuccess, gettingMovieDetailByIDFailed, gettingMovieDetailByIDClear } = GetMovieDetailByIDSlice.actions;

export default GetMovieDetailByIDSlice.reducer;
