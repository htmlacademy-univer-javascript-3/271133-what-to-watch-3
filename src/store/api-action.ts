import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AddCommentType, CommentType, MovieListType, MovieType, PromoMovieType } from '../Types/Movies';
import { ApiRoutes } from '../services/api-routes';
import { AppDispatch, State } from '../Types/State';
import { AuthData, UserData } from '../Types/Auth';
import { dropToken, saveToken } from '../services/token';

export const fetchMoviesAction = createAsyncThunk<
    MovieListType[],
    undefined,
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }
>('data/fetchFilms', async (_arg, {extra: api}) => {
  const {data} = await api.get<MovieListType[]>(ApiRoutes.Movies);
  return data;
});

export const fetchMovieAction = createAsyncThunk<
    MovieType,
    string,
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }
>('data/fetchFilm', async (movieId, {extra: api}) => {
  const {data} = await api.get<MovieType>(ApiRoutes.Movie(movieId));
  return data;
});

export const fetchPromoMovieAction = createAsyncThunk<
    PromoMovieType,
    undefined,
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }
>('data/fetchPromoMovie', async (_arg, {extra: api}) => {
  const {data} = await api.get<PromoMovieType>(ApiRoutes.PromoMovie);
  return data;
});

export const fetchSimilarMoviesAction = createAsyncThunk<
    MovieListType[],
    string,
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }
>('data/fetchSimilarMovies', async (movieId, {extra: api}) => {
  const {data} = await api.get<MovieListType[]>(
    ApiRoutes.SimilarMovies(movieId),
  );
  return data;
});

export const fetchFavouriteMoviesAction = createAsyncThunk<
    MovieListType[],
    undefined,
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }
>('data/fetchFavouriteMovies', async (_arg, {extra: api}) => {
  const {data} = await api.get<MovieListType[]>(ApiRoutes.FavoriteMovies);
  return data;
});

export const fetchCommentsAction = createAsyncThunk<
    CommentType[],
    string,
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }
>('data/fetchComments', async (movieId, {extra: api}) => {
  const {data} = await api.get<CommentType[]>(ApiRoutes.Comments(movieId));
  return data;
});

export const postCommentAction = createAsyncThunk<
    boolean,
    { movieId: string } & AddCommentType,
    {
        state: State;
        extra: AxiosInstance;
    }
>('data/postComment', async ({movieId, ...comment}, {extra: api}) => {
  try {
    await api.post<CommentType>(ApiRoutes.Comments(movieId), comment);
    return true;
  } catch {
    return false;
  }
});

export const postFavouriteMovieAction = createAsyncThunk<
    boolean,
    { movieId: string; status: boolean },
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }
>('data/postFavouriteMovie', async ({movieId, status}, {extra: api}) => {
  try {
    await api.post(ApiRoutes.FavoriteMovie(movieId, status));
    return true;
  } catch {
    return false;
  }
});

export const checkAuthAction = createAsyncThunk<
    UserData,
    undefined,
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }
>('user/checkAuth', async (_arg, {extra: api}) => {
  const {data} = await api.get<UserData>(ApiRoutes.Login);
  return data;
});

export const loginAction = createAsyncThunk<
    UserData,
    AuthData,
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }
>('user/login', async ({email, password}, {extra: api}) => {
  const {data} = await api.post<UserData>(ApiRoutes.Login, {
    email,
    password,
  });
  saveToken(data.token);
  return data;
});

export const logoutAction = createAsyncThunk<
    void,
    undefined,
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }
>('user/logout', async (_arg, {extra: api}) => {
  await api.delete(ApiRoutes.Logout);
  dropToken();
});
