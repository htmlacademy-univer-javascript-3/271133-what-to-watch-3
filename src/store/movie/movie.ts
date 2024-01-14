import { createSlice } from '@reduxjs/toolkit';
import { Namespace } from '../Namespace';
import { fetchMovieAction } from '../api-action';
import { MovieType } from '../../Types/Movies';

type MovieState = {
    isLoading: boolean;
    error?: string;
    data?: MovieType;
};

const initialState: MovieState = {
  isLoading: false,
  data: undefined,
};

export const movie = createSlice({
  name: Namespace.Movie,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMovieAction.fulfilled, (state, value) => {
        state.isLoading = false;
        state.error = undefined;
        state.data = value.payload;
      })
      .addCase(fetchMovieAction.rejected, (state, value) => {
        state.isLoading = false;
        state.error = value.error.message;
      });
  },
});
