import {useAppSelector} from '../../hooks/store';
import {Namespace} from '../namespace';
import {State} from '../../types/state';

export const useFavouriteMoviesSelector = () =>
  useAppSelector((state: State) => state[Namespace.FavoriteMovies]);
