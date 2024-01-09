import { State } from '../../Types/State';
import { useAppSelector } from '../../hooks/Store';
import { Namespace } from '../Namespace';

export const useSimilarMoviesSelector = () =>
  useAppSelector((state: State) => state[Namespace.SimilarMovie]);
