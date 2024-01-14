import { Namespace } from '../Namespace';
import { useAppSelector } from '../../hooks/store';

export const useCurrentMovieSelector = () =>
  useAppSelector((state) => state[Namespace.Movie]);
