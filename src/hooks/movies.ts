import { useCallback, useEffect } from 'react';
import {
  fetchCommentsAction,
  fetchFavouriteMoviesAction,
  fetchMovieAction,
  fetchMoviesAction,
  fetchPromoMovieAction,
  fetchSimilarMoviesAction,
} from '../store/api-action.ts';
import { useAppDispatch } from './store';
import { useAllMoviesSelector } from '../store/movies/selector';
import { useCurrentMovieSelector } from '../store/movie/selector';
import { useCommentsSelector } from '../store/comments/selector';
import { useFavouriteMoviesSelector } from '../store/favourite-movies/selector';
import { usePromoMovieSelector } from '../store/promo-movie/selector';
import { useSimilarMoviesSelector } from '../store/similar-movies/selector';

export const useMovies = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMoviesAction());
  }, [dispatch]);

  const { data, isLoading, error } = useAllMoviesSelector();
  return { data: data, isLoading, error };
};

export const useMovie = (id: string) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovieAction(id));
  }, [dispatch, id]);

  const { data, isLoading, error } = useCurrentMovieSelector();
  return { data: data, isLoading, error };
};

export const usePromoMovie = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPromoMovieAction());
  }, [dispatch]);

  const { data, isLoading, error } = usePromoMovieSelector();
  return { data: data, isLoading, error };
};

export const useSimilarMovies = (id: string) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSimilarMoviesAction(id));
  }, [dispatch, id]);

  const { data, isLoading, error } = useSimilarMoviesSelector();
  return { data: data, isLoading, error };
};

export const useFavouriteMovies = () => {
  const dispatch = useAppDispatch();

  const fetchFavouriteMovies = useCallback(() => {
    dispatch(fetchFavouriteMoviesAction());
  }, [dispatch]);

  const { data, isLoading, error } = useFavouriteMoviesSelector();
  return { data: data, isLoading, error, fetchFavouriteMovies };
};

export const useComments = (id: string) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCommentsAction(id));
  }, [dispatch, id]);

  const { data, isLoading, error } = useCommentsSelector();
  return { data: data, isLoading, error };
};
