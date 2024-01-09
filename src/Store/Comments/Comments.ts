import { createSlice } from '@reduxjs/toolkit';
import { Namespace } from '../Namespace';
import { CommentType } from '../../Types/Movies';
import { fetchCommentsAction } from '../apiAction';

type CommentsState = {
    isLoading: boolean;
    error?: string;
    data: Array<CommentType>;
};

const initialState: CommentsState = {
  isLoading: false,
  data: [],
};

export const comments = createSlice({
  name: Namespace.Comments,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, value) => {
        state.isLoading = false;
        state.error = undefined;
        state.data = value.payload;
      })
      .addCase(fetchCommentsAction.rejected, (state, value) => {
        state.isLoading = false;
        state.error = value.error.message;
      });
  },
});
