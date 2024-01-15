import {PromoMovieType} from '../../types/movies';
import {Namespace} from '../namespace';
import {createSlice} from '@reduxjs/toolkit';
import {fetchPromoMovieAction} from '../api-action';

type PromoMovieState = {
  isLoading: boolean;
  error?: string;
  data?: PromoMovieType;
};

const initialState: PromoMovieState = {
  isLoading: false,
  data: undefined,
};

export const promoMovie = createSlice({
  name: Namespace.PromoMovie,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPromoMovieAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPromoMovieAction.fulfilled, (state, value) => {
        state.isLoading = false;
        state.error = undefined;
        state.data = value.payload;
      })
      .addCase(fetchPromoMovieAction.rejected, (state, value) => {
        state.isLoading = false;
        state.error = value.error.message;
      });
  },
});
