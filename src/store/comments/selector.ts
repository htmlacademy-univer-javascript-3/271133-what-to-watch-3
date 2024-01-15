import {Namespace} from '../namespace';
import {useAppSelector} from '../../hooks/store';

export const useCommentsSelector = () =>
  useAppSelector((state) => state[Namespace.Comments]);
