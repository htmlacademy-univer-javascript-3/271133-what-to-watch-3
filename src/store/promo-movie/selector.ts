import { Namespace } from '../Namespace';
import { useAppSelector } from '../../hooks/store';

export const usePromoMovieSelector = () =>
  useAppSelector((state) => state[Namespace.PromoMovie]);
