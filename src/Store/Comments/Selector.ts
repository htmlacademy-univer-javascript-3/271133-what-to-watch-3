import { Namespace } from '../Namespace';
import { useAppSelector } from '../../hooks/Store';

export const useCommentsSelector = () =>
  useAppSelector((state) => state[Namespace.Comments]);
