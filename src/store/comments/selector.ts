import { Namespace } from '../Namespace';
import { useAppSelector } from '../../hooks/store';

export const useCommentsSelector = () =>
  useAppSelector((state) => state[Namespace.Comments]);
