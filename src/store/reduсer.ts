import {combineReducers} from '@reduxjs/toolkit';
import {Namespace} from './namespace';
import {promoMovie} from './promo-movie/promo-movie';
import {similarMovies} from './similar-movies/similar-movies';
import {favouriteMovies} from './favourite-movies/favourite-movies';
import {user} from './user/user';
import {comments} from './comments/comments';
import {movie} from './movie/movie';
import {movies} from './movies/movies';

export const rootReducer = combineReducers({
  [Namespace.Movie]: movie.reducer,
  [Namespace.Movies]: movies.reducer,
  [Namespace.PromoMovie]: promoMovie.reducer,
  [Namespace.SimilarMovie]: similarMovies.reducer,
  [Namespace.FavoriteMovies]: favouriteMovies.reducer,
  [Namespace.User]: user.reducer,
  [Namespace.Comments]: comments.reducer,
});
