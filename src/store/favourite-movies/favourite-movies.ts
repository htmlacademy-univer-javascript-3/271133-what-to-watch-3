import { createSlice } from '@reduxjs/toolkit';
import { Namespace } from '../Namespace';
import { fetchFavouriteMoviesAction } from '../apiAction';
import { MovieListType } from '../../Types/Movies';

type FavouriteMoviesState = {
    isLoading: boolean;
    error?: string;
    data: Array<MovieListType>;
};

const initialState: FavouriteMoviesState = {
  isLoading: false,
  data: [],
};

export const favouriteMovies = createSlice({
  name: Namespace.FavoriteMovies,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavouriteMoviesAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFavouriteMoviesAction.fulfilled, (state, value) => {
        state.isLoading = false;
        state.error = undefined;
        state.data = value.payload;
      })
      .addCase(fetchFavouriteMoviesAction.rejected, (state, value) => {
        state.isLoading = false;
        state.error = value.error.message;
      });
  },
});
