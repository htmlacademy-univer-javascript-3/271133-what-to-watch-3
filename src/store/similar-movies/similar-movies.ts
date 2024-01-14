import { createSlice } from '@reduxjs/toolkit';
import { MovieListType } from '../../Types/Movies';
import { Namespace } from '../Namespace';
import { fetchSimilarMoviesAction } from '../apiAction';

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
