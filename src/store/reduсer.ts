import { combineReducers } from '@reduxjs/toolkit';
import { Namespace } from './Namespace';
import { promoMovie } from './PromoMovie/PromoMovie';
import { similarMovies } from './SimilarMovies/SimilarMovies';
import { favouriteMovies } from './FavouriteMovies/FavouriteMovies';
import { user } from './User/User';
import { comments } from './Comments/Comments';
import { movie } from './Movie/Movie';
import { movies } from './Movies/Movies';

export const rootReducer = combineReducers({
  [Namespace.Movie]: movie.reducer,
  [Namespace.Movies]: movies.reducer,
  [Namespace.PromoMovie]: promoMovie.reducer,
  [Namespace.SimilarMovie]: similarMovies.reducer,
  [Namespace.FavoriteMovies]: favouriteMovies.reducer,
  [Namespace.User]: user.reducer,
  [Namespace.Comments]: comments.reducer,
});
