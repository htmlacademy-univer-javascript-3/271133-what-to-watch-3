import {Namespace} from '../namespace';
import {useAppSelector} from '../../hooks/store';

export const usePromoMovieSelector = () =>
  useAppSelector((state) => state[Namespace.PromoMovie]);
