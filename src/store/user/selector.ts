import {useAppSelector} from '../../hooks/store';
import {Namespace} from '../namespace';

export const useAuthorizationStatusSelector = () =>
  useAppSelector((state) => state[Namespace.User].authorizationStatus);

export const useAvatarLinkSelector = () =>
  useAppSelector((state) => state[Namespace.User].avatarLink);
