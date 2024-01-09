import { Namespace } from '../Namespace';
import { useAppSelector } from '../../hooks/Store';

export const usePromoMovieSelector = () =>
  useAppSelector((state) => state[Namespace.PromoMovie]);
