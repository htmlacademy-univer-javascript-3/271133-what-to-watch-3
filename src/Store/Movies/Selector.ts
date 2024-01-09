import { Namespace } from '../Namespace';
import { useAppSelector } from '../../hooks/Store';

export const useAllMoviesSelector = () =>
  useAppSelector((state) => state[Namespace.Movies]);

export const useCurrentGenreSelector = () =>
  useAppSelector((state) => state[Namespace.Movies].currentGenre);
