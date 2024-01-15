import {Namespace} from '../namespace';
import {useAppSelector} from '../../hooks/store';

export const useCurrentMovieSelector = () =>
  useAppSelector((state) => state[Namespace.Movie]);
