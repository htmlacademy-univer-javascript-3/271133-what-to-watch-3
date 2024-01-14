import { createSlice } from '@reduxjs/toolkit';
import { MovieListType } from '../../types/movies';
import { Namespace } from '../namespace';
import { fetchSimilarMoviesAction } from '../api-action';

type SimilarMoviesState = {
    isLoading: boolean;
    error?: string;
    data: Array<MovieListType>;
};

const initialState: SimilarMoviesState = {
  isLoading: false,
  data: [],
};

export const similarMovies = createSlice({
  name: Namespace.SimilarMovie,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSimilarMoviesAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSimilarMoviesAction.fulfilled, (state, value) => {
        state.isLoading = false;
        state.error = undefined;
        state.data = value.payload;
      })
      .addCase(fetchSimilarMoviesAction.rejected, (state, value) => {
        state.isLoading = false;
        state.error = value.error.message;
      });
  },
});
