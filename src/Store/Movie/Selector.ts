import { Namespace } from '../Namespace';
import { useAppSelector } from '../../hooks/Store';

export const useCurrentMovieSelector = () =>
  useAppSelector((state) => state[Namespace.Movie]);
