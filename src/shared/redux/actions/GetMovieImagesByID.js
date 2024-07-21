// src/features/someFeature/someFeatureSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


// Define an async thunk
export const GetMovieImagesByID = createAsyncThunk('moviesImagesByID', async (payload, { dispatch, getState }) => {
    let headersList = {
        "Accept": "*/*",
        "api_key": "176a14dc8f651e7ed9f7dba074475eed",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzZhMTRkYzhmNjUxZTdlZDlmN2RiYTA3NDQ3NWVlZCIsIm5iZiI6MTcyMTQyMDM2NC4zMDkzNDYsInN1YiI6IjY2OWFjOGFlYjgwOGRkNTliMzA5ODJiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.54tDWP0RT4A9LlZjIQNhxVQ0_qunSx2HzIQJfM5DF9M"
    }
    // Alert.alert("hihihi")
    console.log(payload)
    dispatch(gettingMovieImagesByID())
    fetch(`https://api.themoviedb.org/3/movie/${payload}/images`, {
        method: "GET",
        headers: headersList
    }).then((response) => response.json())
        .then((result) => {
            // console.log(result)
            dispatch(gettingMovieImagesByIDSuccess(result))
        })
        .catch((error) => {
            console.log(error)
            dispatch(gettingMovieImagesByIDFailed(error))
        })
    // const data = await response.json();
    // return data;
}
);
export const GetMovieImagesByIDClear = () => createAsyncThunk('moviesImagesByID', async (payload, { dispatch, getState }) => {
    dispatch(gettingMovieImagesByIDFailed(null))
})
export const GetMovieImagesByIDSlice = createSlice({
    name: 'moviesImagesByID',
    initialState: {
        moviesImagesByID: [],
        moviesImagesByIDLoading: false,
        moviesImagesByIDError: null,
        // status: 'idle', // idle | loading | succeeded | failed
        error: null,
    },
    reducers: {
        gettingMovieImagesByID: (state) => {
            state.moviesImagesByID = []
            state.moviesImagesByIDLoading = true
            state.moviesImagesByIDError = null
        },
        gettingMovieImagesByIDSuccess: (state, action) => {
            state.moviesImagesByIDLoading = false
            state.moviesImagesByID = action.payload
            state.moviesImagesByIDError = null

        },
        gettingMovieImagesByIDFailed: (state, action) => {
            state.moviesImagesByIDLoading = false
            state.moviesImagesByID = []
            state.moviesImagesByIDError = action.payload

        },
        gettingMovieImagesByIDClear: (state,action) => {
            state.moviesImagesByIDLoading = false
            state.moviesImagesByID = []
            state.moviesImagesByIDError = null

        },
    },
});

export const { gettingMovieImagesByID, gettingMovieImagesByIDSuccess, gettingMovieImagesByIDFailed, gettingMovieImagesByIDClear } = GetMovieImagesByIDSlice.actions;

export default GetMovieImagesByIDSlice.reducer;
