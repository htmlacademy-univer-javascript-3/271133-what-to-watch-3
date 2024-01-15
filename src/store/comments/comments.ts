import {createSlice} from '@reduxjs/toolkit';
import {Namespace} from '../namespace';
import {CommentType} from '../../types/movies';
import {fetchCommentsAction} from '../api-action';

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
