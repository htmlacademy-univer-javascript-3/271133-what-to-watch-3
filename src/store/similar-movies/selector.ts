import { State } from '../../types/state';
import { useAppSelector } from '../../hooks/store';
import { Namespace } from '../namespace';

export const useSimilarMoviesSelector = () =>
  useAppSelector((state: State) => state[Namespace.SimilarMovie]);
