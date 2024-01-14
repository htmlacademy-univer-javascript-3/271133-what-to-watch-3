import { useAppSelector } from '../../hooks/store';
import { Namespace } from '../Namespace';
import { State } from '../../Types/State';

export const useFavouriteMoviesSelector = () =>
  useAppSelector((state: State) => state[Namespace.FavoriteMovies]);
