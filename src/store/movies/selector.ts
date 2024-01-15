import { Namespace } from '../namespace';
import { useAppSelector } from '../../hooks/store.ts';

export const useAllMoviesSelector = () =>
  useAppSelector((state) => state[Namespace.Movies]);

export const useCurrentGenreSelector = () =>
  useAppSelector((state) => state[Namespace.Movies].currentGenre);
