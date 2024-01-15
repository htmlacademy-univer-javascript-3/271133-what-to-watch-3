import {MouseEvent, useCallback, useEffect} from 'react';
import {useFavouriteMovies} from '../../../hooks/movies';
import {useAppDispatch} from '../../../hooks/store';
import {postFavouriteMovieAction} from '../../../store/api-action';

export type FavouriteButtonProps = {
  movieId?: string;
};

export const Favourite = ({movieId}: FavouriteButtonProps) => {
  const {data: movies, fetchFavouriteMovies} = useFavouriteMovies();
  useEffect(() => {
    fetchFavouriteMovies();
  }, [fetchFavouriteMovies]);
  const isFavourite = movies.some((movie) => movie.id === movieId);

  const dispatch = useAppDispatch();
  const handleClick = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      e.preventDefault();
      if (movieId) {
        dispatch(
          postFavouriteMovieAction({
            movieId: movieId,
            status: !isFavourite,
          }),
        ).then(() => {
          fetchFavouriteMovies();
        });
      }
    },
    [dispatch, movieId, isFavourite, fetchFavouriteMovies],
  );

  return (
    <button
      className='btn btn--list movie-card__button'
      type='button'
      onClick={handleClick}
    >
      <svg viewBox='0 0 19 20' width='19' height='20'>
        <use
          xlinkHref={isFavourite ? '#in-list' : '#add'}
          data-testid={'favorite-svg'}
        />
      </svg>
      <span>My list</span>
      <span className='film-card__count'>{movies.length}</span>
    </button>
  );
};
