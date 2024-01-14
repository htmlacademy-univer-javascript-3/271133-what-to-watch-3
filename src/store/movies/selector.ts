import { Namespace } from '../Namespace';
import { useAppSelector } from '../../hooks/store';

export const useAllMoviesSelector = () =>
  useAppSelector((state) => state[Namespace.Movies]);

export const useCurrentGenreSelector = () =>
  useAppSelector((state) => state[Namespace.Movies].currentGenre);