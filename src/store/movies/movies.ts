import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ALL_GENRES, MovieListType } from '../../types/movies';
import { Namespace } from '../namespace';
import { fetchMoviesAction } from '../api-action';

type MoviesState = {
    isLoading: boolean;
    error?: string;
    data: Array<MovieListType>;
    currentGenre: string;
};

const initialState: MoviesState = {
  isLoading: false,
  data: [],
  currentGenre: ALL_GENRES,
};

export const movies = createSlice({
  name: Namespace.Movies,
  initialState,
  reducers: {
    setGenre: (state, action: PayloadAction<string>) => {
      state.currentGenre = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMoviesAction.fulfilled, (state, value) => {
        state.isLoading = false;
        state.error = undefined;
        state.data = value.payload;
      })
      .addCase(fetchMoviesAction.rejected, (state, value) => {
        state.isLoading = false;
        state.error = value.error.message;
      });
  },
});

export const { setGenre } = movies.actions;
