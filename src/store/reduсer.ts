import { combineReducers } from '@reduxjs/toolkit';
import { Namespace } from './Namespace';
import { movies } from './Movies/Movies';
import {movie} from './movie/movie.js';
import {promoMovie} from './promo-movie/promo-movie.js';
import {similarMovies} from './similar-movies/similar-movies.js';
import {favouriteMovies} from './favourite-movies/favourite-movies.js';
import {user} from './user/user.js';
import {comments} from './comments/comments.js';

export const rootReducer = combineReducers({
  [Namespace.Movie]: movie.reducer,
  [Namespace.Movies]: movies.reducer,
  [Namespace.PromoMovie]: promoMovie.reducer,
  [Namespace.SimilarMovie]: similarMovies.reducer,
  [Namespace.FavoriteMovies]: favouriteMovies.reducer,
  [Namespace.User]: user.reducer,
  [Namespace.Comments]: comments.reducer,
});
